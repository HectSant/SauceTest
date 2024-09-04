describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
    devices.forEach(device => {
      it(`should work on ${device}`, () => {
        // viewport para ver el dispositivo actual
        cy.viewport(device);
  
    /*TUS1-1 Login con usuario y password correctos*/
        // Abre la página de SauceDemo
        cy.visit('https://www.saucedemo.com'); 
        
        // Espera a que el campo de nombre de usuario esté visible
        cy.get('#user-name').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.get('#login-button').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('standard_user');
  
        // Llena el campo de contraseña
        cy.get('#password').type('secret_sauce');
        
        //comprueba que existe el boton
        cy.get('#login-button').should('have.class', 'submit-button btn_action');
        //click en el Boton login      
        cy.get('#login-button').click();
  
        cy.visit('https://www.saucedemo.com');
        
     /*TUS1-2 Login con usuario correcto y password incorrecto (password con caracteres especiales)*/
        // Espera a que el campo de nombre de usuario esté visible
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('standard_user');
  
        // Llena el campo de contraseña
        cy.get('#password').type('Incorrect-p@ss');
        
        //click en el Boton login
        cy.get('#login-button').click();
  
        //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');
  
        cy.visit('https://www.saucedemo.com');
      /*TUS1-3 Login con usuario incorrecto y password correcto (username con caracteres especiales)*/
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('Incorrect-user@');
  
        // Llena el campo de contraseña
        cy.get('#password').type('secret_sauce');
        
        //click en el Boton login
        cy.get('#login-button').click();
  
        //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');      
  
        cy.visit('https://www.saucedemo.com');  
  
      /*TUS1-4 Login con usuario en blanco y password en blanco */
          
        //click en el Boton login
        cy.get('#login-button').click();
  
        //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');      
  
        cy.visit('https://www.saucedemo.com');
   
      /*TUS1-5 Login con usuario y password en blanco */
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('standard_user');
       
        //click en el Boton login
        cy.get('#login-button').click();
  
        //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');     
  
        cy.visit('https://www.saucedemo.com'); 
    
      /*TUS1-6 Login con usuario bloqueado y password. */
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('locked_out_user');
  
        // Llena el campo de contraseña
        cy.get('#password').type('secret_sauce');
       
        //click en el Boton login
        cy.get('#login-button').click();
  
       //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');  
  
        cy.visit('https://www.saucedemo.com');  
  
      /*TUS1-7 User name con espacios */
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('locked out user');
  
        // Llena el campo de contraseña
        cy.get('#password').type('secret_sauce');
       
        //click en el Boton login
        cy.get('#login-button').click();
  
       //comprueba que el error mostrado coincide con el esperado
       cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');  
  
        cy.visit('https://www.saucedemo.com'); 
      /*TUS1-8 Password con espacios */
        cy.get('#user-name').should('be.visible');
  
        // Llena el campo de nombre de usuario
        cy.get('#user-name').type('standard_user');
  
        // Llena el campo de contraseña
        cy.get('#password').type('secret sauce');
    
        //click en el Boton login
        cy.get('#login-button').click();
  
       //comprueba que el error mostrado coincide con el esperado
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');  
  
        cy.visit('https://www.saucedemo.com');    
    });
});
});  