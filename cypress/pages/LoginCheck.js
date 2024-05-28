class LoginCheck {
    elements = {
        Username: () => cy.xpath("//input[@id='mui-1']"),
        Password: () => cy.xpath("//input[@id='outlined-adornment-password']"),
        Checkbox: () => cy.xpath("//input[@type='checkbox']"),
        LoginBtn: () => cy.xpath("//button[normalize-space()='Login']"),
        AccCircle: () => cy.xpath("//span[contains(text(),'account_circle')]"),
        LogoutBtn: () => cy.xpath("//body/div[@id='basic-menu']/div[3]/ul[1]/li[1]"),
        ThemeBtn: () => cy.xpath("/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/button[1]")
    }
    ScrollBottom() {

        this.elements.ScrollBottom()
    }
    EnterCredentials(username,password) {
        this.elements.Username().type(username);
        this.elements.Password().type(password);

    }
    checkRememberMeToggle(matchUrlString) {
        this.elements.Checkbox().check()
    }
    clickLoginBtn(){
        this.elements.LoginBtn().click();
    }
    clickAccCircle(){
        this.elements.AccCircle().click();
    }
    checkLogoutBtn(){
        this.elements.LogoutBtn().should("have.text", "Logout");
    }
    clickThemeBtn() {
        this.elements.ThemeBtn().click();
    }

    // checkHeaderText(matchText1) {
    //     this.elements.mainHeader().invoke('text').then((x) => {
    //         const trimmedtest = x.trim();
    //         expect(trimmedtest).to.equal(matchText1)

    //     });
    // }
    // clickOnATMButton() {
    //     this.elements.ATMBtn().click();
    // }
    // // clickOnATMLocBtn() {
    // //     this.elements.SearchboxContainer().click();
    // // }
    // enterCountry(country) {
    //     this.elements.SearchinputBox().click();
    //     cy.wait(2000)
    //     this.elements.SearchinputBox().type(country)
    // }
    // SelectCountryOption(country) {
    //     this.elements.SearchAuto().each(($el, index, $list) => {
    //         if ($el.text() == country) {
    //             cy.wrap($el).click();
    //         }
    //     });
    // }
    // checkATMHeaderName() {
    //     this.elements.SearchResult().should('be.visible')
    //         .should("contain", 'Rajbhavan Road')
    // }
    // clickShowMoreBtn() {
    //     this.elements.ShowMoreBtn().click();
    // }
    // checkATMToolTip() {
    //     this.elements.SecondOptionSearch().trigger('mouseover').should('contain', '2')
    // }

    // checkInstagram() {
    //     this.elements.Instagram().should("be.visible").should('have.attr', 'href').should('include', 'instagram.com')
    // }
    // checkFacebook() {
    //     this.elements.Facebook().should("be.be.visible").should('have.attr', 'href').should('include', 'facebook.com')
    // }
    // checkTwitter() {
    //     this.elements.Twitter().should("be.visible").should('have.attr', 'href').should('include', 'twitter.com')
    // }
    // checkYoutube() {
    //     this.elements.Youtube().should("be.visible").should('have.attr', 'href').should('include', 'youtube.com')
    // }
    // clickLogo() {
    //     cy.wait(2000)
    //     this.elements.HSBCLogo().click();
    // }
    // VerifyNavigationTitle(navPageTittle1) {
    //     this.elements.PageTitle().should("eq", navPageTittle1);
    // }
    // CheckPrivacyLink() {
    //     this.elements.PrivacyLink().click();
    // }
    // checkPrivacyHeader() {
    //     this.elements.PrivacyHeader().invoke('text').then((privacy1) => {
    //         const trimmedtext = privacy1.trim();
    //         expect(trimmedtext).to.equal("Privacy Statement")
    //     });
    // }
}
module.exports = new LoginCheck()