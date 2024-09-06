Cypress.Commands.add('formError', elements => 
    elements.forEach(selector =>
        cy.get(selector).should('have.class', 'ion-color-danger'),
    ),
);
