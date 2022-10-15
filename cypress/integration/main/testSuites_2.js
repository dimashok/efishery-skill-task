describe("Test Suites 2", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.viewport("macbook-13");
    cy.visit("/");
    cy.wait(2000);
  });

  it("Next and previous button in player", () => {
    //Given I am playing the music
    cy.play_music();

    //And there is a music player in footer side
    //When I click next button
    cy.get(".next-button").click();
    cy.get('[slot="player-bar"]')
      .contains("It Don't Matter")
      .should("not.exist");
    cy.wait(10000);

    // And previous button
    cy.get(".previous-button").click();
    cy.get(".previous-button").click(); //should click the prev button twice

    //Then I can play the next/previous music
    cy.get('[slot="player-bar"]').contains("It Don't Matter").should("exist");
    cy.wait(10000);
  });

  it("Open singer via player", () => {
    // Given I am playing the music
    // And there is a music player in footer side
    cy.play_music();

    //When I read 'Jacob Collier' text hyperlink
    //And I click it
    cy.get('a[href="channel/UCNT3LDWzyiCrA8hH7KbVTLg"]:eq(7)').click({
      timeout: 1000,
    });

    //Then I am redirected to the singer menu
    cy.url().should("contain", "channel/UCNT3LDWzyiCrA8hH7KbVTLg");
    cy.contains("Jacob Collier").should("be.visible");
    cy.contains("Jacob Collier adalah musisi asal London, Inggris.").should(
      "be.visible"
    );
  });

  it("Shuffle button in player", () => {
    // Given I am playing the music
    // And there is a music player in footer side
    cy.play_music();

    //When I click the shuffle button on the right side of the footer
    cy.get(".shuffle").click();
    //Then I can turn on the shuffle mode
  });

  it("Repeat button in player", () => {
    // Given I am playing the music
    // And there is a music player in footer side
    cy.play_music();

    //When I click the repeat button on the right side of the footer
    cy.get(".repeat:eq(0)").click();
    cy.get(".repeat:eq(0)").should("have.attr", "title", "Ulangi semua");
  });

  it("Mute button in player", () => {
    // Given I am playing the music
    // And there is a music player in footer side
    cy.play_music();

    //When I click the repeat button on the right side of the footer
    cy.get(".volume").click();
    cy.get(".volume").should("have.attr", "title", "Bisukan");
  });
});
