class Category {
    elements = {
        SettingsMenu: () => cy.xpath("//li[2]//div[1]//div[2]//span[1]//div[1]"),
        CategorySubMenu: () => cy.xpath("//div[contains(text(),'Categories')]"),
        AddNewbtn: () => cy.xpath("//button[normalize-space()='Add New']"),
        CategoryName: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        CategoryCode: () => cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/input[1]"),
        SaveBtn: () =>  cy.xpath("//button[normalize-space()='Save']") 
    }
    ScrollBottom() {

        this.elements.ScrollBottom()
    }
    selectMenu() {
        this.elements.SettingsMenu().click();
    }
    selectSubMenu() {
        this.elements.CategorySubMenu().scrollIntoView().should("be.visible").click();
    }
    clickAddNewBtn() {
        this.elements.AddNewbtn().click();
    }
    entercontactdetails() {
        this.elements.CategoryName().type("Wearable2");
        this.elements.CategoryCode().type("ERCT2");
      
    }
    clickSaveBtn(){
        this.elements.SaveBtn().click();
    }
}
module.exports = new Category()