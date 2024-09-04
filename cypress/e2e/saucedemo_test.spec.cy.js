describe('SauceDemo Test', () => {
   
  const devices = ['iphone-x', 'ipad-2', 'macbook-15','samsung-s10'];

  devices.forEach(device => {
    it(`should work on ${device}`, () => {
      // Configura la vista para el dispositivo actual
      cy.viewport(device);


 // it('Visits the SauceDemo website and logs in', () => {
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
    //TUS2*/
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click(); 
      
    //TUS2 Preparacion, comprueba que el numero de opciones desplegadas son 4

      cy.get('select[data-test="product-sort-container"]').find('option').should('have.length', 4);
           
    //TUS2-1. Usar filtro Name A-Z
      cy.get('select.product_sort_container').select('az')


    //TUS2-2. Usar filtro Name Z-A 
      cy.wait(1000);
      cy.get('select.product_sort_container').select('za')
      

    //TUS2-3. Usar filtro Price Low to High 
      cy.wait(1000);
      cy.get('select.product_sort_container').select('lohi')
    //TUS2-4. Usar filtro Price High to Low 
      cy.wait(1000);
      cy.get('select.product_sort_container').select('hilo')
      cy.wait(1000); 
    //TUS3  
      cy.visit('https://www.saucedemo.com');  
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click();  

      //TUS3-1. Agregar producto al carrito de compras

      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.wait(1000)

      // Verifica que el carro tenga el contador de productos 1
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');

      //TUS3-2. Remover producto del carrito de compras

      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      
      // Verifica que el carro tenga el contador de productos 0
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist');

    //TUS4  
      //TUS4-1. Ver detalle del producto seleccionado
      cy.get('#item_4_img_link').click();
      cy.wait(2000)

      cy.get('[data-test="add-to-cart"]').click();
      cy.wait(2000)
      //TUS4-2. Verificar que el boton “Remove” funciona correctamente
      cy.get('[data-test="remove"]').click();
   
    //TUS5  
    
      cy.visit('https://www.saucedemo.com');  
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click(); 

      //TUS5-1. Verificar la información mostrada es la del producto agregado al carrito

      cy.get('#add-to-cart-sauce-labs-backpack').click();

      cy.get('#shopping_cart_container').click();

      //Remover el producto del carrito de compras
      cy.wait(3000)

      cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    //TUS5-2. Verificar el botón “continue shopping”.
      cy.visit('https://www.saucedemo.com');  
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click(); 
      //agregar producto
      cy.get('#add-to-cart-sauce-labs-backpack').click();
      //agregar producto 
      cy.get('#add-to-cart-sauce-labs-bike-light').click();
      //click en el carrito de compras
      cy.get('[data-test="shopping-cart-link"]').click(); 
      cy.wait(3000)
      //click en continue Shopping
      cy.get('[data-test="continue-shopping"]').click();       
    
    //TUS5-3. Verificar boton “Remove”. Dentro del carrito de compras
      cy.visit('https://www.saucedemo.com');  
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click();
      
      cy.get('[data-test="shopping-cart-link"]').click(); 
      cy.wait(3000)
      //click en el boton remove
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();

      cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    
    //TUS5-4. Validar botón “Checkout”
      cy.get('[data-test="checkout"]').click();
    
    //TUS6-1. Redireccionar correctamente al dar click en “Continue”

     cy.visit('https://www.saucedemo.com');  
      // Espera a que el campo de nombre de usuario esté visible
      cy.get('#user-name').should('be.visible');

      // Llena el campo de nombre de usuario
      cy.get('#user-name').type('standard_user');

      // Llena el campo de contraseña
      cy.get('#password').type('secret_sauce');
      
      //click en el Boton login
      cy.get('#login-button').click();

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
    //TUS7-1
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
        cy.get('[data-test="finish"]').click();
        
  });
  });
  });