describe('DemoBlaze E2E Tests', () => {

    const username = 'testUser' + Math.floor(Math.random() * 1000);
    const password = 'TestPassword123';

    it('Should register a new user', () => {
        cy.visit('https://www.demoblaze.com/');

        cy.get('#signin2').click();

        cy.wait(1000);

        cy.get('#sign-username').type(username);
        cy.get('#sign-password').type(password);

        cy.get('button[onclick="register()"]').click();

        cy.wait(2000);
    });

    it('Should login with the newly created user', () => {
        cy.visit('https://www.demoblaze.com/');

        cy.get('#login2').click();

        cy.wait(1000);

        cy.get('#loginusername').type(username);
        cy.get('#loginpassword').type(password);

        cy.get('button[onclick="logIn()"]').click();

        cy.contains('Welcome ' + username).should('be.visible');
    });

    it('Should add Samsung Galaxy S6 to the cart', () => {
        cy.visit('https://www.demoblaze.com/');

        cy.contains('Samsung galaxy s6').click();
        cy.wait(1000);
        cy.contains('Add to cart').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added.');
        });

        cy.get('#cartur').click();

        cy.contains('Samsung galaxy s6').should('be.visible');
    });
});
