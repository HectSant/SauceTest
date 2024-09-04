describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
    devices.forEach(device => {

        it(`should work on ${device}`, () => {
            // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl();
            cy.login();
            //TUS5              
            //TUS5-1. Verificar la información mostrada es la del producto agregado al carrito

            cy.get('#add-to-cart-sauce-labs-backpack').click();

            cy.get('#shopping_cart_container').click();

            //Remover el producto del carrito de compras
            cy.wait(3000)

            cy.get('[data-test="remove-sauce-labs-backpack"]').click();

            cy.get('[data-test="continue-shopping"]').click();

            //agregar producto
            cy.get('#add-to-cart-sauce-labs-backpack').click();
            //agregar producto 
            cy.get('#add-to-cart-sauce-labs-bike-light').click();

            //Verifica el contador visible del carrito de compras

            cy.get('[data-test="shopping-cart-link"]').should('be.visible');
            cy.get('[data-test="shopping-cart-link"]').should('have.text','2');

            // Verifica que el carro de compras, es interactivo (cuando el elemento no es un boton pero si un URL)
            cy.get('[data-test="shopping-cart-link"]').invoke('prop', 'onclick').should('be.a', 'function');
            
            //click en el carrito de compra
            cy.get('[data-test="shopping-cart-link"]').click(); 

            //TUS5-2 click en continue Shopping
            cy.get('[data-test="continue-shopping"]').should('be.visible');
            cy.get('[data-test="continue-shopping"]').should('have.class','btn_secondary');
            cy.get('[data-test="continue-shopping"]').click();       
            
            //TUS5-3. Verificar boton “Remove”. Dentro del carrito de compras
                                
            cy.get('[data-test="shopping-cart-link"]').click(); 
          
            //click en el boton remove
            cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible'); 
            cy.get('[data-test="remove-sauce-labs-backpack"]').click();
           
            //TUS5-4. Validar botón “Checkout”

            // Verifica que el boton "checkout", es interactivo y redirecciona
            cy.get('[data-test="checkout"]').should('be.visible');
            cy.get('[data-test="checkout"]').invoke('prop', 'onclick').should('be.a', 'function');
            cy.get('[data-test="checkout"]').click();


        });
    });
});               