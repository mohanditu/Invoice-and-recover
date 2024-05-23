import LoginCheck from "../../pages/LoginCheck";
import Contact from "../../pages/Contact";
describe("Validate Invoice and Recover Appliaction", () => {
    let webdata;
    context('Invoice & recover Login Scenario', () => {
        beforeEach(() => {
            cy.visit('http://66.133.97.28:8081/login')
        })

        it('Validate Login Functionality', () => {
            cy.viewport(1800, 800)
            LoginCheck.EnterCredentials();
            LoginCheck.checkRememberMeToggle();
            LoginCheck.clickLoginBtn();
            LoginCheck.clickAccCircle();
            LoginCheck.checkLogoutBtn();
        })
        it('Validate Add New Contact', () => {
            cy.viewport(1800, 800)
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
            cy.wait(5000)
            Contact.clickSaveBtn();
            cy.wait(1000)
            Contact.checkContactAdd();
            
        })
        // it('Validate Logout Functionality', () => {
        //     cy.viewport(1200, 800);
        //     LoginCheck.EnterCredentials();
        //     LoginCheck.checkRememberMeToggle();
        //     LoginCheck.clickLoginBtn();
        //     LoginCheck.clickAccCircle();
        //     LoginCheck.checkLogoutBtn();
        // })

      
    })
    
   
})

