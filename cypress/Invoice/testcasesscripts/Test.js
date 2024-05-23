describe("Validate Invoice and Recover Appliaction", () => {
    let webdata;
    it("Add Contact", () => {

        cy.fixture('example.json').then((data) => {
            webdata = data;
        });
        cy.viewport(1500, 800)
        cy.visit("http://66.133.97.28:8081/login")
        cy.xpath("//input[@id='mui-1']").type("testinginvoice@yopmail.com");
        cy.xpath("//input[@id='outlined-adornment-password']").type("22222222")
        cy.xpath("//input[@type='checkbox']").check();
        cy.xpath("//button[normalize-space()='Login']").click()
        // cy.xpath("//div[contains(text(),'Contacts')]").click();
        // cy.xpath("//button[normalize-space()='Add New']").click();
        // cy.xpath("//div[contains(@class,'MuiBox-root css-1ircn5c')]//div[2]//div[1]//div[1]//div[1]").click();
        // cy.get(".css-1hu8n59").each(($el, index, $list) => {
        //     if ($el.text() == "Supplier") {
        //         cy.wrap($el).click();
        //     }
        // });
        // cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/input[1]").type("Edios Pvt Ltd");
        // cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/input[1]").type("Sudhanshu6");
        // cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[6]/div[1]/div[1]/input[1]").should("be.visible").type("98653245645");
        // cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[7]/div[1]/div[1]/input[1]").type("mohancypress7@yopmail.com");
        // cy.xpath("/html[1]/body[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[12]/div[1]/div[1]/input[1]").click().type("123");

        // cy.wait(3000);
        // cy.get(".pac-container").should("be.visible").each(($el, index, $list) => {
        //     let m = "Festival Towers, 123 Albert St, Brisbane City QLD 4000, Australia".trim();
        //     if (true) {
        //         console.log("testing",m);
        //         cy.wrap($el).click();
        //     }
        // });
        // cy.wait(5000)
        // cy.xpath("//button[normalize-space()='Save']").click();
        // cy.wait(1000)
        // cy.get(':nth-child(4) > .Toastify__toast-container').should("be.visible").should("have.text","Added successfully.")
        cy.xpath("//li[2]//div[1]//div[2]//span[1]//div[1]").click();
        cy.xpath("//div[contains(text(),'Categories')]").scrollIntoView().should("be.visible").click();
        cy.xpath("//button[normalize-space()='Add New']").click();
        // cy.wait(5000);
        cy.xpath("//input[@id='mui-10']").should("be.visible").type("Electronic2");
        cy.xpath("//input[@id='mui-11']").type("ERC2");
        cy.xpath("//button[normalize-space()='Save']").click();
        // cy.get("cy.get(':nth-child(4) > .Toastify__toast-container").should("be.visible").should("have.text","Added successfully");







        //     cy.xpath("//h4[@class='MuiTypography-root MuiTypography-body1 css-18r0w27']").invoke('text').then((data)=>
        // {
        //     // console.log("username1 : "+data);
        //     const trimmedUsername=data.trimEnd();
        //     console.log("username : "+trimmedUsername);
        //     expect(trimmedUsername).to.equal("mohan  singh")
        // cy.xpath("//span[contains(text(),'account_circle')]").click()
        // cy.xpath("//body/div[@id='basic-menu']/div[3]/ul[1]/li[1]").click();
        // cy.xpath("//body/div[3]/div[3]/div[1]/div[1]/button[2]").click();
        // cy.go('back')
        // cy.wait(5000)
        // cy.visit("http://66.133.97.28:8081/dashboard");
        //     // cy.xpath("//button[normalize-space()='Login']").click();     
        // });
    })
})