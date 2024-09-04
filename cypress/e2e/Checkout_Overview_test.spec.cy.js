describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
    devices.forEach(device => {

        it(`should work on ${device}`, () => {
            // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl();
            cy.login();

            //agregar producto
            cy.get('#add-to-cart-sauce-labs-backpack').click();
            //agregar producto 
            cy.get('#add-to-cart-sauce-labs-bike-light').click();
            //TUS7-1
            //click en carrito de compras
            cy.get('[data-test="shopping-cart-link"]').click(); 
            cy.wait(3000)
            //llenar datos checkout
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type('Homero');
            cy.get('[data-test="lastName"]').type('Simpson') ; 
            cy.get('[data-test="postalCode"]').type('Avenida siempre viva 742');
            cy.wait(3000)
            //click continue Checkout
            cy.get('[data-test="continue"]').click();
            cy.wait(3000) 
            //click cancel Checkout
            cy.get('[data-test="cancel"]').click();
            //TUS7-2
            cy.visiturl();
            cy.login();            
            //click en carrito de compras
            cy.get('[data-test="shopping-cart-link"]').click(); 
            cy.wait(3000)
            //llenar datos checkout
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type('Homero');
            cy.get('[data-test="lastName"]').type('Simpson') ; 
            cy.get('[data-test="postalCode"]').type('Avenida siempre viva 742');
            cy.wait(3000)
            //click continue Checkout
            cy.get('[data-test="continue"]').click();
            cy.wait(3000) 
            //click cancel Checkout
            cy.get('[data-test="cancel"]').click();
            //click Finish
            cy.get('[data-test="finish"]').click();
        
        });
    });
});