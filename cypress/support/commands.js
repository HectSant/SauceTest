// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('visiturl',() => {
    cy.fixture('userpass.json').then((user) => {
    cy.visit(user.endpoint)    
})
})

Cypress.Commands.add('login', () => {
                // Carga el archivo JSON y usa los datos para hacer login
                cy.fixture('userpass.json').then((user) => {
                //Login
                cy.get('#user-name').type(user.username);//llena el campo username
                cy.get('#password').type(user.password); // Llena el campo de contraseña
                cy.get('#login-button').click(); // Hacer clic en el botón de login
 })

})
 //
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })