class Items {
    elements = {
        SettingsMenu: () => cy.xpath("//li[2]//div[1]//div[2]//span[1]//div[1]"),
        ItemsSubMenu: () => cy.xpath("//div[contains(text(),'Items')]"),
        AddNewbtn: () => cy.xpath("//button[normalize-space()='Add New']"),
        CategoryDropdown: () => cy.xpath("//input[@id='categoryName-select']"),
        CategoryDropdownList: () => cy.xpath("//li[@id='categoryName-select-option-0']"),
        ItemName:() => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/input[1]"),
        ItemCode: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/input[1]"),
        MeasurementDrpdwn: () => cy.xpath("//body/div[@id='root']/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[7]/div[1]/div[1]"),
        MeasurementDrpdwnlist: () => cy.xpath("//body/div[@id='menu-']/div[3]/ul[1]/li[1]"),
        UnitPrice: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[8]/div[1]/div[1]/input[1]"),
        DefaultQty: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[9]/div[1]/div[1]/input[1]"),
        GST: () => cy.xpath("//body/div[@id='root']/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[10]/div[1]/div[1]"),
        GSTList: () => cy.xpath("//body/div[@id='menu-']/div[3]/ul[1]/li[1]"),   
        SaveBtn: () =>  cy.xpath("//button[normalize-space()='Save']"),
        toastMessage: ()=> cy.get(':nth-child(4) > .Toastify__toast-container')
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
        cy.wait(3000)
        this.elements.CategoryDropdownList().should("be.visible").click();      
    }
    enterDetails() {
        this.elements.ItemName().type("Laptop");
        this.elements.ItemCode().type("rtg");
        this.elements.UnitPrice().type("1000");
        cy.wait(3000)
        this.elements.DefaultQty().type("4");
    }
    selectMeasurementDropwdown() {
        this.elements.MeasurementDrpdwn().should("be.visible").click();
        this.elements.MeasurementDrpdwnlist().should("be.visible").click();      
    }
    selectGSTDropwdown() {
        this.elements.GST().should("be.visible").click();
        this.elements.GSTList().should("be.visible").click();      
    }
    clickSaveBtn(){
        this.elements.SaveBtn().click();
    }
    checkItemAdd(){
        this.elements.toastMessage().should("have.text", "Added successfully.");
    }
}
module.exports = new Items()