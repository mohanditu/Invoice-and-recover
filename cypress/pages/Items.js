class Items {
    elements = {
        SettingsMenu: () => cy.xpath("//li[2]//div[1]//div[2]//span[1]//div[1]"),
        ItemsSubMenu: () => cy.xpath("//div[contains(text(),'Items')]"),
        AddNewbtn: () => cy.xpath("//button[normalize-space()='Add New']"),
        CategoryDropdown: () => cy.xpath("//input[@id='categoryName-select']"),
        CategoryDropdownList: () => cy.xpath("//li[@id='categoryName-select-option-0']"),
        ItemName:() => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/input[1]"),
        ItemCode: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/input[1]"),
        MeasurementDrpdwn: () => cy.xpath(""),
        MeasurementDrpdwnlist: () => cy.xpath(""),
        UnitPrice: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[8]/div[1]/div[1]/input[1]"),
        DefaultQty: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[9]/div[1]/div[1]/input[1]"),
        GST: () => cy.xpath("//div[10]//div[1]//div[1]//div[1]//span[1]"),            
        SaveBtn: () =>  cy.xpath("//button[normalize-space()='Save']") 
    }
    ScrollBottom() {

        this.elements.ScrollBottom()
    }
    selectMenu() {
        this.elements.SettingsMenu().click();
    }
    selectSubMenu() {
        this.elements.ItemsSubMenu().scrollIntoView().should("be.visible").click();
    }
    clickAddNewBtn() {
        this.elements.AddNewbtn().click();
    }
    selectCategoryDropwdown() {
        this.elements.CategoryDropdown().click();
        this.elements.CategoryDropdownList().should("be.visible").click();      
    }
    enterDetails() {
        this.elements.ItemName().type("Laptop");
        this.elements.ItemCode().type("rtg");
        this.elements.UnitPrice().type("1000");
        cy.wait(3000)
        this.elements.DefaultQty().type("4");
    }
    selectGstDropwdown() {
        this.elements.CategoryDropdown().click();
        this.elements.CategoryDropdownList().should("be.visible").click();      
    }
    // clickSaveBtn(){
    //     this.elements.SaveBtn().click();
    // }
}
module.exports = new Items()