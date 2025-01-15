describe('Login', () => {
    const users = require('../../fixtures/users.json');
    const couldHaveErrorList = [
        '#toggle-password',
        '#btn-login',
        '#btn-vagabond',
        '#btn-new-user'
    ];

    beforeEach(() => {
        cy.visit('http://localhost:4200/login')
    });

    it('should get invalid email error', () => {
        cy.get('#input-email input').type('Yugi');
        cy.get('#input-email').should('have.class', 'ng-invalid');
        cy.formError(couldHaveErrorList);
        cy.get('#input-email .error-text').should('have.text', 'Invalid email.');
        cy.contains('#error-password', 'Password must be greater than 8 characters.').should('not.exist');
    });

    it('should get invalid password error', () => {
        cy.get('#input-password input').click();
        cy.get('#input-password input').blur();
        cy.contains('#input-email .error-text', 'Invalid email.').should('not.be.visible')
        cy.get('#input-password .error-text').should('have.text', 'Password is required.');
        cy.get('#input-password').should('have.class', 'ng-invalid');
        cy.get('#input-password input').type('123456');
        cy.get('#input-password input').blur();
        cy.contains('#error-password', 'Password must be greater than 7 characters.').should('be.visible');
        cy.formError(couldHaveErrorList);
    });

    users.forEach(user => {
        it(`should enable login button to user ${user.name}`, () => {
            cy.get('#input-email input').type(user.email);
            cy.get('#input-password input').type(user.password);
            cy.get('#btn-login').should('not.have.class', 'button-disabled');
        });
    });
});