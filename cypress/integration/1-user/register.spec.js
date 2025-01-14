describe('Sign Up', () => {
    const couldHaveErrorList = [
        '#toggle-password',
        '#btn-signup',
        '#btn-back-to-login'
    ];

    beforeEach(() => {
        cy.visit('http://localhost:4200/user');
    });

    it('should get required name error', () => {
        cy.get('#input-name input').focus();
        cy.get('#input-name input').blur();
        cy.get('#input-name').should('have.class', 'ng-invalid');
        cy.get('#input-name .error-text').should('have.text', 'Name is required.');
    });

    it('should get invalid email error', () => {
        cy.get('#input-email input').type('invalid-email');
        cy.get('#input-email').should('have.class', 'ng-invalid');
        cy.get('#input-email .error-text').should('have.text', 'Invalid email.');
    });

    it('should get email confirmation error', () => {
        cy.get('#input-email input').type('test@example.com');
        cy.get('#input-email-confirmation input').type('wrong@example.com');
        cy.get('#input-email-confirmation').should('have.class', 'ng-invalid');
        cy.get('#input-email-confirmation .error-text').should('have.text', 'Invalid email.');
    });

    it('should get required password error', () => {
        cy.get('#input-password input').type('123456');
        cy.get('#input-password').should('have.class', 'ng-invalid');
        cy.get('#input-password .error-text').should('have.text', 'Password must be greater than 7 characters.');
    });

    it('should get password confirmation error', () => {
        cy.get('#input-password input').type('password123');
        cy.get('#input-password-confirmation input').type('password321');
        cy.get('#input-password-confirmation').should('have.class', 'ng-invalid');
        cy.get('#input-password-confirmation .error-text').should('have.text', 'Password must be greater than 7 characters.');
    });

    it('should enable Sign Up button when form is valid', () => {
        cy.get('#input-name input').type('John Doe');
        cy.get('#input-email input').type('test@example.com');
        cy.get('#input-email-confirmation input').type('test@example.com');
        cy.get('#input-password input').type('password123');
        cy.get('#input-password-confirmation input').type('password123');
        cy.get('#btn-signup').should('not.have.attr', 'disabled');
    });

    it('should upload a image', () => {
        const fileName = 'avatar.png';
        const fileType = 'image/png';
        const fileContent = 'mock-content';
    
        const file = new File([fileContent], fileName, { type: fileType });
        cy.get('#input-avatar').selectFile({
            contents: file,
            fileName: fileName,
            mimeType: fileType
        }, { force: true });
        cy.get('img').should('have.attr', 'alt')
    });
});
