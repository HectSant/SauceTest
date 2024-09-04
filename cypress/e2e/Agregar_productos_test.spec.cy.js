describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
    devices.forEach(device => {

        it(`should work on ${device}`, () => {
            // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl()
            cy.login()

            //TUS3-1. Agregar producto al carrito de compras

            cy.get('#add-to-cart-sauce-labs-backpack').click();

            cy.wait(1000)

            // Verifica que el carro tenga el contador de productos 1
            cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

            //TUS3-2. verificar que el boton "Remover" sea visible y se pueda clickear
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
            cy.get('[data-test="remove-sauce-labs-backpack"]').click();
            
            // Verifica que el carro tenga el contador de productos 0
            cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
        });
    });
});  