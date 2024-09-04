describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
      devices.forEach(device => {

            it(`should work on ${device}`, () => {
            // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl();
            cy.login();

            //TUS4  
            //TUS4-1. Ver detalle del producto seleccionado
            cy.get('#item_4_img_link').click();

            //comprueba que existe y sea visible el boton "Add to cart"
            cy.get('[data-test="add-to-cart"]').should('be.visible');
            cy.get('[data-test="add-to-cart"]').should('have.class', 'btn_primary');
            cy.get('[data-test="add-to-cart"]').click();

            //TUS4-2. Verificar que el boton “Remove” funciona correctamente
            //Comprueba que existe y sea visible el boton "remove"
            cy.get('[data-test="remove"]').should('be.visible');
            cy.get('[data-test="remove"]').should('have.class','btn_secondary btn_small btn_inventory')
            cy.get('[data-test="remove"]').click();

            //comprueba que existe y sea visible el boton "Back to products"
            cy.get('[data-test="back-to-products"]').should('be.visible');
            cy.get('[data-test="back-to-products"]').should('have.class','btn_secondary');
            cy.get('[data-test="back-to-products"]').click();

        });
    });
});                  