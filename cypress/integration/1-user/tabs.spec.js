describe('Ion Tabs Navigation', () => {
    const tabs = [
        { tab: 'battle', label: 'Battle', icon: 'game-controller' },
        { tab: 'graveyard', label: 'Graveyard', icon: 'skull' },
        { tab: 'banned', label: 'Banned', icon: 'ban' }
    ];

    beforeEach(() => {
        cy.visit('http://localhost:4200/duel');
    });

    it('should render all tab buttons', () => {
        tabs.forEach(({ tab, label }) => {
            cy.get(`ion-tab-button[tab="${tab}"]`).should('be.visible');
            cy.get(`ion-tab-button[tab="${tab}"] ion-label`)
                .invoke('text')
                .then(text => expect(text.trim()).to.equal(label));
        });
    });

    it('should navigate to each tab on click', () => {
        tabs.forEach(({ tab }) => {
            cy.get(`ion-tab-button[tab="${tab}"]`).click();
            cy.url().should('include', `/${tab}`);
        });
    });

    it('should display the correct icon for each tab', () => {
        tabs.forEach(({ tab, icon }) => {
            cy.get(`ion-tab-button[tab="${tab}"] ion-icon`).should('have.attr', 'name', icon);
        });
    });

    it('should apply active styling to the selected tab', () => {
        tabs.forEach(({ tab }) => {
            cy.get(`ion-tab-button[tab="${tab}"]`).click();
            cy.get(`ion-tab-button[tab="${tab}"]`).should('have.class', 'tab-selected');
        });
    });

    it('should default to the first tab if no route is specified', () => {
        cy.visit('http://localhost:4200/duel');
        cy.url().should('include', '/battle');
    });
});
