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
// Cypress.Commands.add('login', (email, password) => { ... })
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
import { faker } from '@faker-js/faker';
import { SignUp } from '../pages/signup';

Cypress.Commands.add('signup', () => {
    const signup = new SignUp();
    cy.viewport('macbook-16')
    cy.visit('/', { failOnStatusCode: false })
    cy.wait(500)
    let firstname = faker.person.firstName('male');
    let lastname = faker.person.lastName('male');
    let pwd = faker.internet.password({ length: 25, memorable: false, pattern:  /[A-Z0-9@#$&*_a-z]/, prefix: 'nav' });
    let email = faker.internet.exampleEmail({ allowSpecialCharacters: false , delay:50});
    
    signup.clickCreateAccount();
    signup.inputFirstName(firstname);
    signup.firstNameErrorCheck();
    signup.inputLastName(lastname);
    signup.lastNameErrorCheck();
    signup.checkNewsletter();
    signup.inputEmail(email);
    signup.emailErrorCheck();
    signup.inputPassword(pwd);
    signup.passwordErrorCheck();
    signup.inputConfirmPassword(pwd);
    signup.clickSubmit();
}),

Cypress.Commands.add('signin', (username,password) => {
    cy.session([username,password], () => {
        cy.visit('/', { failOnStatusCode: false })
        cy.get('.panel > .header > .authorization-link > a').should('contain', 'Sign In').click()
        cy.wait(2000)
        cy.get('#email').clear().type(username, { delay: 20 })
        cy.get('#pass').clear().type(password, { delay: 20 })
        cy.get('#send2').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain','naveed shoukat').should('be.visible')
    },
    {
        cacheAcrossSpecs: true
    }
    )
}),

Cypress.Commands.add('signout', () => {
    cy.visit('/', { failOnStatusCode: false })
    cy.wait(5000)
    cy.get('ul > li[class="customer-welcome"]').should('not.have.class','active').click({ multiple: true, force: true})
    cy.wait(200)
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').should('contain','Sign Out').click({force: true})
    
})