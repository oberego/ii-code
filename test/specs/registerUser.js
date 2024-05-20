import homePage from "../pageObjects/homePage.js"
import loginPage from "../pageObjects/loginPage.js"
import registerPage from "../pageObjects/registerPage.js"


describe("Ecommerce Application",async()=>
{

it("Register User",async()=>
{
await browser.url("https://automationexercise.com/")
await expect(browser).toHaveTitle("Automation Exercise")
await homePage.SignupLogin.click()
await expect(await loginPage.newUserSignup).toHaveText("New User Signup!")
await loginPage.signingup("Benjamin","okeybrown@yahoo.coouom")
await expect(await registerPage.Header).toHaveText("ENTER ACCOUNT INFORMATION")
await registerPage.titleMr.click()
await registerPage.password.setValue("automation")
await registerPage.dobDay.selectByVisibleText("10")
await registerPage.dobMonth.selectByVisibleText("October")
await registerPage.dobYear.selectByVisibleText("2000")
await registerPage.newsLetter.click()
await registerPage.offers.click()
await registerPage.firstName.setValue("Bentest")
await registerPage.lastName.setValue("Tester")
await registerPage.company.setValue("interactive")
await registerPage.address1.setValue("201")
await registerPage.address2.setValue("deansgate")
await registerPage.country.selectByVisibleText("Canada")
await registerPage.state.setValue("Ontario")
await registerPage.city.setValue("Toronto")
await registerPage.zipcode.setValue("M33NW")
await registerPage.mobile.setValue("012345678910")
await registerPage.createAccount.click()
await expect (await registerPage.accountCreated).toHaveText("ACCOUNT CREATED!")
await registerPage.continueButton.click()
await expect (await registerPage.loggedIn).toHaveText("Logged in as Benjamin")
await registerPage.deleteAccount.click()
await expect (await registerPage.VerifyDeletedAccount).toHaveText("ACCOUNT DELETED!")
await registerPage.continueButton.click()


}
)
}
)
