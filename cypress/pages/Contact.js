class Contact {
    elements = {
        AddContactBtn: () => cy.xpath("//div[contains(text(),'Contacts')]"),
        AddNewBtn: () => cy.xpath("//button[normalize-space()='Add New']"),
        ContactType: () => cy.xpath("//div[contains(@class,'MuiBox-root css-1ircn5c')]//div[2]//div[1]//div[1]//div[1]"),
        contactTypeDropdown: () => cy.get(".css-1hu8n59"),
        companyName: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/input[1]"),
        ContactName: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/input[1]"),
        ContactMobileNo: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/div[1]/div[1]/input[1]"),
        ContactEmail: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[7]/div[1]/div[1]/input[1]"),
        StreetAddress: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[12]/div[1]/div[1]/input[1]"),
        StreetAddressList: () => cy.get(".pac-container"),
        SaveBtn: () => cy.xpath("//button[normalize-space()='Save']"),
        toastMessage: ()=> cy.get(':nth-child(4) > .Toastify__toast-container')
    }
    ScrollBottom() {

        this.elements.ScrollBottom()
    }
    selectMenu() {
        this.elements.AddContactBtn().click();
    }
    clickAddNewBtn() {
        this.elements.AddNewBtn().click();
    }
    clickContactType() {
        this.elements.ContactType().click();
    }
    selectContactType() {
        this.elements.contactTypeDropdown().each(($el, index, $list) => {
            if ($el.text() == "Customer") {
                cy.wrap($el).click();
            }
        });
    }
    entercontactdetails() {
        this.elements.companyName().type("Edios Pvt Ltd");
        this.elements.ContactName().type("Mohan Singh");
        this.elements.ContactMobileNo().type("9867321245");
        this.elements.ContactEmail().type("test1@yopmail.com");
    }
    enterStreetAddress() {
        this.elements.StreetAddress().type("123");
    }
    selectStreetAddressByList() {
        this.elements.StreetAddressList().should("be.visible").each(($el, index, $list) => {
            if (true) {
                cy.wait(2000)
                cy.wrap($el).click();
            }
        });
    }
    clickSaveBtn(){
        this.elements.SaveBtn().click();
    }
    checkContactAdd(){
        this.elements.toastMessage().should("have.text", "Added successfully.");
    }

}
module.exports = new Contact()