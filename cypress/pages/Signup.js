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
		usecondgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 2']"),
		uthirdgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 3']"),
		ufourthgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 4']"),
		ufifthgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 5']"),
		usixthgrid:() => cy.xpath("//div[@class='MuiGrid-root MuiGrid-container css-v3z1wi']//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-12 css-1uo6sxl']//div//input[@aria-label='Please enter OTP character 6']"),
		lfirstgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[1]"),
		lsecondgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[2]"),
		lthirdgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[3]"),
		lfourthgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[4]"),
		lfifthgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[5]"),
		lsixthgrid:() => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/input[6]"),
        Submitbtn: () => cy.xpath("//body/div[@id='root']/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/button[1]"),
        NewPassword: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        ConfirmPassword: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]"),
        SaveBtn2: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/button[1]"),
        BusinessName: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        AbnNumber: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/input[1]"),
        OrgType: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]"),
        OrgTypeList: () => cy.xpath("/html[1]/body[1]/div[3]/div[3]/ul[1]/li[1]"),
        IndType: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/div[1]"),
        IndTypeList: () => cy.xpath("/html[1]/body[1]/div[3]/div[3]/ul[1]/li[1]"),
        StreetAddress: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/div[1]/input[1]"),
        StreetAddressList: () => cy.get(".pac-container"),
        Termsandconcheckbox: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[10]/span[1]/input[1]"),
        SignUpBtn: () => cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/button[1]"),
        ToastMessage: () => cy.get('.Toastify__toast-body')
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
        this.elements.EmailAddress().type("Logitech6@yopmail.com");
        
    }
    selectCountryCode() {
        this.elements.CountryCode().click();
        cy.wait(1000)
        this.elements.IndiaCode().click();
        cy.wait(1000)
        this.elements.PhoneNumber().type("897909568");
    }
    clickSaveBtn() {
        this.elements.saveBtn().click();
    }
    entergriddetails() {
        this.elements.ufirstgrid().type("1");
        this.elements.usecondgrid().type("1");
        this.elements.uthirdgrid().type("1");
        this.elements.ufourthgrid().type("1");
        this.elements.ufifthgrid().type("1");
        this.elements.usixthgrid().type("1");
        this.elements.lfirstgrid().type("1");
        this.elements.lsecondgrid().type("1");
        this.elements.lthirdgrid().type("1");
        this.elements.lfourthgrid().type("1");
        this.elements.lfifthgrid().type("1");
        this.elements.lsixthgrid().type("1");
        this.elements.Submitbtn().click();
    }
    enterPasswordDetails() {
        this.elements.NewPassword().type("22222222");
        this.elements.ConfirmPassword().type("22222222");
        this.elements.SaveBtn2().type("22222222");
    }
    enterBusinessDetails() {
        this.elements.BusinessName().type("ABC Enterprise");
        this.elements.AbnNumber().type("12345678232");
        this.elements.OrgType().click();
        cy.wait(1000)
        this.elements.OrgTypeList().should("be.visible").click();
        this.elements.IndType().click();
        cy.wait(1000)
        this.elements.IndTypeList().should("be.visible").click();
        this.elements.StreetAddress().click().type("123");
        cy.wait(3000);
        this.elements.StreetAddressList().should("be.visible").each(($el,index,$list) => {
            if(true){
                cy.wrap($el).should("be.visible").click();
            }
        });
        this.elements.Termsandconcheckbox().check();
        this.elements.SignUpBtn().click();
    }
    checktoastMessage() {
        this.elements.ToastMessage().should("have.text","Saved successfully.");
    }    
}
module.exports = new Signup()