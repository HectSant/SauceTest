describe('SauceDemo Test', () => {
   
    const devices = ['iphone-x', 'ipad-2', 'macbook-15','samsung-s10'];
  
    devices.forEach(device => {

        it(`should work on ${device}`, () => {
            // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl();
            cy.login();
            //TUS6-1. Redireccionar correctamente al dar click en “Continue”
            //agregar producto
            cy.get('#add-to-cart-sauce-labs-backpack').click();
            //agregar producto 
            cy.get('#add-to-cart-sauce-labs-bike-light').click();
            //click en el carrito de compras
            cy.get('[data-test="shopping-cart-link"]').click(); 
            cy.wait(3000)

            //click en “Checkout”
            cy.get('[data-test="checkout"]').click();

            //llenar datos checkout
            cy.get('[data-test="firstName"]').type('Homero');
            cy.get('[data-test="lastName"]').type('Simpson') ; 
            cy.get('[data-test="postalCode"]').type('Avenida siempre viva 742');
            cy.wait(3000)
            //click en continue
            cy.get('[data-test="continue"]').click();
            cy.wait(3000)    
            
            //TUS6-2. Redireccionar correctamente al dar click en “cancel”  
            cy.visit('https://www.saucedemo.com');  
            cy.get('#user-name').should('be.visible');

            // Llena el campo de nombre de usuario
            cy.get('#user-name').type('standard_user');

            // Llena el campo de contraseña
            cy.get('#password').type('secret_sauce');
            
            //click en el Boton login
            cy.get('#login-button').click();
            //click en carrito de compras
            cy.get('[data-test="shopping-cart-link"]').click(); 
            cy.wait(3000)
            //llenar datos cleckout
            cy.get('[data-test="checkout"]').click();
            cy.get('[data-test="firstName"]').type('Homero');
            cy.get('[data-test="lastName"]').type('Simpson') ; 
            cy.get('[data-test="postalCode"]').type('Avenida siempre viva 742');
            cy.wait(3000)
            //click en boton cancelar
            cy.get('[data-test="cancel"]').click();
            cy.wait(3000)   
        
            //TUS6-3. Campos en blanco
            //llenar datos cleckout
            cy.get('[data-test="checkout"]').click();
            cy.wait(2000)
            //
            cy.get('[data-test="continue"]').click();
            cy.wait(3000)
            //TUS6-4. Diligenciar unicamente el campo First Name 
            cy.get('[data-test="firstName"]').type('Homero');
            cy.get('[data-test="continue"]').click();
            cy.wait(3000)
            //TUS6-5. Diligenciar los campos First Name y Last Name
            cy.get('[data-test="lastName"]').type('Simpson'); 
            cy.get('[data-test="continue"]').click();
            cy.wait(3000)
            //TUS6-6. Diligenciar los campos First Name y Last Name con caracteres especiales
            cy.get('[data-test="firstName"]').clear();
            cy.get('[data-test="lastName"]').clear();
            cy.get('[data-test="firstName"]').type('M@rch');
            cy.get('[data-test="lastName"]').type('S/mpson'); 
            cy.get('[data-test="postalCode"]').type('Avenida siempre viva 742');
            cy.get('[data-test="continue"]').click();
            cy.wait(3000)
        });
    });
});   