import LoginPageClass from './LoginPageClass'


describe('Login Page test cases', ()=>{
    const loginPageClass = new LoginPageClass()
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
        loginPageClass.getPasswordTxt(loginPageData.txtPassword.cssSelector).should('have.text',loginPageData.txtPassword.expectedValue)
    });
  
    it('Verifying user is not able to loign correct username incorrect password', ()=>{
        loginPageClass.getUsername(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.inputValue)
        loginPageClass.getPassword(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.incorrectpuPassword)
        loginPageClass.clickButton(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign incorrect username correct password', ()=>{  
        loginPageClass.getUsername(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.incorrectUsername)
        loginPageClass.getPassword(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.inputValue)
        loginPageClass.clickButton(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign incorrect username incorrect password', ()=>{  
        loginPageClass.getUsername(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.incorrectUsername)
        loginPageClass.getPassword(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.incorrectpuPassword)
        loginPageClass.clickButton(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        cy.get(loginPageData.txtInvalidCredsAlert.cssSelector).should('have.text',loginPageData.txtInvalidCredsAlert.expectedValue)
    });

    it('Verifying user is not able to loign correct username correct password', ()=>{
        loginPageClass.getUsername(loginPageData.inputTxtUsername.cssSelector).type(loginPageData.inputTxtUsername.inputValue)
        loginPageClass.getPassword(loginPageData.inputTxtPassword.cssSelector).type(loginPageData.inputTxtPassword.inputValue)
        loginPageClass.clickButton(loginPageData.btnSubmit.cssSelector).click()
        cy.wait(3000)
        loginPageClass.getText(dashboardData.txtAdminManagement.cssSelector).should('have.text',dashboardData.txtAdminManagement.expectedValue)
    });
    
});
