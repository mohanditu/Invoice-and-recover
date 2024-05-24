class Signup {
    elements = {
        SignupLink: () => cy.xpath("//span[normalize-space()='Sign up']"),
        FirstName: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[1]/input[1]"),
        LastName: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/div[1]/input[1]"),
        EmailAddress: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[4]/div[1]/div[1]/input[1]"),
        PhoneNumber: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[5]/div[1]/div[1]/input[1]"),
        CountryCode: () => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[5]/div[1]/div[1]/div[1]/button[1]"),
        CountryCodeList: () => cy.xpath("//body/div[@id='country-menu']/div[3]"),
        IndiaCode: () => cy.xpath("//body/div[@id='country-menu']/div[3]/ul[1]/li[2]"),
        saveBtn:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[6]/button[1]"),
		ufirstgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 1']"),
		usecondgrid:() => cy.xpath
		uthirdgrid:() => cy.xpath
		ufourthgrid:() => cy.xpath
		ufifthgrid:() => cy.xpath
		usixthgrid:() => cy.xpath
		lfirstgrid:() => cy.xpath
		lsecondgrid:() => cy.xpath
		lthirdgrid:() => cy.xpath
		lfourthgrid:() => cy.xpath
		lfifthgrid:() => cy.xpath
		lsixthgrid:() => cy.xpath
		
    }
    ScrollBottom() {

        this.elements.ScrollBottom()
    }
    clickSignuplink()
    {
        this.elements.SignupLink().click();
    }
    enterSignupDetails() {
        this.elements.FirstName().type("Logitech");
        this.elements.LastName().type("Singh");
        this.elements.EmailAddress().type("Logitech@yopmail.com");
        
    }
    selectCountryCode() {
        this.elements.CountryCode().click();
        cy.wait(1000)
        this.elements.IndiaCode().click();
        cy.wait(1000)
        this.elements.PhoneNumber().type("8956231245");
    }
    clickSaveBtn() {
        this.elements.saveBtn().click();
    }
    
}
module.exports = new Signup()