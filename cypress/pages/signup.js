export class SignUp {

    constructor(){
        this.firstname_field = '#firstname';
        this.lastname_field = '#lastname';
        this.newsletter_checkbox = '#is_subscribed';
        this.email_field = '#email_address';
        this.password_field = '#password';
        this.confirm_password_field = '#password-confirmation';
        this.submit_button = '#form-validate';
        this.error_message = '#error_message';
    }

    clickCreateAccount(){
        cy.get('.panel > .header > :nth-child(3) > a')
            .contains('Create an Account')
            .should('be.visible')
            .click()
    }
    inputFirstName(firstname){
        cy.get(this.firstname_field)
            .focus()
            .clear()
            .type(firstname)
    }
    firstNameErrorCheck(){
        cy.get('#firstname-error')
            .should('not.exist')
    }
    inputLastName(lastname){
        cy.get(this.lastname_field)
            .focus()
            .clear()
            .type(lastname)
    }
    lastNameErrorCheck(){
        cy.get('#lastname-error')
            .should('not.exist')   
    }
    checkNewsletter(){
        cy.get(this.newsletter_checkbox)
            .not('[disabled]')
            .check()
            .should('be.checked')
    }
    inputEmail(email){
        cy.get(this.email_field)
            .focus()
            .clear()
            .type(email)
    }
    emailErrorCheck(){
        cy.get('#email_address-error')
          .should('not.exist')
    }
    inputPassword(pwd){
        cy.get(this.password_field)
            .focus()
            .clear()
            .type(pwd)
    }
    passwordErrorCheck(){
        cy.get('#password-strength-meter')
             .should('not.contain','No Password')
    }
    inputConfirmPassword(pwd){
        cy.get(this.confirm_password_field)
            .focus()
            .clear()
            .type(pwd)
    }
    clickSubmit(){
        cy.get(this.submit_button).submit()
    }
}