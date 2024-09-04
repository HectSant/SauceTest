describe('SauceDemo Test', () => {
   
    const devices = ['iphone-6'];//, 'ipad-2', 'macbook-15'];
  
    devices.forEach(device => {

      it(`should work on ${device}`, () => {
         // viewport para ver el dispositivo actual
            cy.viewport(device);
            cy.visiturl();
            cy.login()   

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
        });
    });
});
