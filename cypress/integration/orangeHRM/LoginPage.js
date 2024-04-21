describe('Login Page test cases', ()=>{
    let loginPageData;
    let dashboardData;
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    before(()=>{
        cy.fixture('loginPage').then((data)=>
        {
            loginPageData = data
        })

        cy.fixture('dashboardPage').then((adminDashboard)=>
        {
            dashboardData = adminDashboard
        })
    })


    it('Verifying user is able to login Page', ()=>{  
        cy.get(loginPageData.txtPassword.cssSelector).should('have.text',loginPageData.txtPassword.expectedValue)
    });
  
    it('Verifying user is not able to loign correct username incorrect password', ()=>{  
        cy.get(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.inputValue)
        cy.get(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.incorrectpuPassword)
        cy.get(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign incorrect username correct password', ()=>{  
        cy.get(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.incorrectUsername)
        cy.get(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.inputValue)
        cy.get(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign incorrect username incorrect password', ()=>{  
        cy.get(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.incorrectUsername)
        cy.get(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.incorrectpuPassword)
        cy.get(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign correct username correct password', ()=>{ 
        cy.log(dashboardData.txtAdminManagement.cssSelector) 
        cy.get(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.inputValue)
        cy.get(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.inputValue)
        cy.get(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(dashboardData.txtAdminManagement.cssSelector).should('have.text',dashboardData.txtAdminManagement.expectedValue)
    });
    
});
