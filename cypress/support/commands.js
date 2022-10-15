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

//global command for playing music

Cypress.Commands.add("play_music", () => {
  cy.get(".ytmusic-search-box").contains("Telusuri").click();
  cy.get('input[id="input"]').type("it don't matter Jacob Collier{enter}");

  cy.contains("Hasil teratas").should("be.visible");
  cy.get(".ytmusic-shelf-renderer")
    .contains("It Don't Matter (feat. JoJo)")
    .should("be.visible", { multiple: true });

  //Then I can click it
  // And the music will start
  cy.get(".ytmusic-shelf-renderer")
    .contains("It Don't Matter (feat. JoJo)")
    .click();

  cy.get('[slot="player-bar"]').should("be.visible");
  cy.wait(20000);
});
