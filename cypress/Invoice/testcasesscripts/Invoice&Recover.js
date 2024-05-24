import LoginCheck from "../../pages/LoginCheck";
import Contact from "../../pages/Contact";
import Category from "../../pages/Category";
import Items from "../../pages/Items";

describe("Validate Invoice and Recover Appliaction", () => {
    let webdata;
    context('Invoice & recover Login Scenario', () => {
        beforeEach(() => {
            cy.visit('http://66.133.97.28:8081/login')
        })

        it.skip('Validate Login Functionality', () => {
            cy.viewport(1800, 800)
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            LoginCheck.clickAccCircle();
            LoginCheck.checkLogoutBtn();
        })
        it.skip('Validate Add New Contact', () => {
            cy.viewport(1700, 800)
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            Contact.selectMenu();
            Contact.clickAddNewBtn();
            Contact.clickContactType();
            Contact.selectContactType();
            Contact.entercontactdetails();
            Contact.enterStreetAddress();
            cy.wait(3000)
            Contact.selectStreetAddressByList();
            cy.wait(2000)
            Contact.clickSaveBtn();
            cy.wait(1000)
            Contact.checkContactAdd();
        })
        it.skip('Valdate Add Category Functionality', () => {
            cy.viewport(1200, 800);
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            Category.selectMenu();
            Category.selectSubMenu();
            Category.clickAddNewBtn();
            cy.wait(3000)
            Category.entercontactdetails();
            Category.clickSaveBtn();
            Category.checkCategoryAdd();
        })
        it('Valdate Add Category Functionality', () => {
            cy.viewport(1200, 800);
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            Items.selectMenu();
            Items.selectSubMenu();
            Items.clickAddNewBtn();
            cy.wait(3000)
            Items.selectCategoryDropwdown();
            Items.enterDetails();            
            cy.wait(3000);
            Items.selectMeasurementDropwdown();   
            cy.wait(3000); 
            Items.selectGSTDropwdown();
            cy.wait(2000)
            Items.clickSaveBtn();   
            Items.checkItemAdd();     
            
        })
    })

});

