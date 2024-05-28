import LoginCheck from "../../pages/LoginCheck";
import Contact from "../../pages/Contact";
import Category from "../../pages/Category";
import Items from "../../pages/Items";
import Signup from "../../pages/Signup";

describe("Validate Invoice and Recover Appliaction", () => {
    let webdata
    before(() => {
  
      cy.fixture('example.json').then((data) => {
        webdata = data
      })
    })
    context('Invoice & recover Login Scenario', () => {
        beforeEach(() => {
            cy.visit('http://66.133.97.28:8081/login')
        })

        it('Validate Login Functionality', () => {
            cy.viewport(1800, 800)
            LoginCheck.EnterCredentials(webdata.username,webdata.Password);
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            LoginCheck.clickThemeBtn();
            LoginCheck.clickAccCircle();
            LoginCheck.checkLogoutBtn();
            
        })
        it.skip('Validate Add New Contact', () => {
            cy.viewport(1700, 800)
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            LoginCheck.clickThemeBtn();
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
            LoginCheck.clickThemeBtn();
            Category.selectMenu();
            Category.selectSubMenu();
            Category.clickAddNewBtn();
            cy.wait(3000)
            Category.entercontactdetails();
            Category.clickSaveBtn();
            Category.checkCategoryAdd();
        })
        it.skip('Valdate Add Item Functionality', () => {
            cy.viewport(1200, 800);
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            LoginCheck.clickThemeBtn();
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
        it.skip('Valdate Signup Functionality', () => {
            cy.viewport(1300, 800);
            Signup.clickSignuplink();
            Signup.enterSignupDetails();
            Signup.selectCountryCode();
            Signup.clickSaveBtn();
            cy.wait(2000)
            Signup.entergriddetails();
            Signup.enterPasswordDetails();
            Signup.enterBusinessDetails();
            Signup.checktoastMessage();
        })
    })

});

