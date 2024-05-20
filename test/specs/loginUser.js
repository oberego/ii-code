import loginPage from "../pageObjects/loginPage.js"
import homePage from "../pageObjects/homePage.js"
import registerPage from "../pageObjects/registerPage.js"


describe("Ecommerce Application",async()=>
{

it("Login User",async()=>
{
await browser.url("https://automationexercise.com/")
await expect(browser).toHaveTitle("Automation Exercise")
await homePage.SignupLogin.click()
await expect(await loginPage.loginForm).toHaveText("Login to your account")

await loginPage.signin("okeybrown@yahoo.com","automation")
await expect (await homePage.loggedIn).toHaveText("Logged in as Benjamin")
await registerPage.deleteAccount.click()
await expect (await registerPage.VerifyDeletedAccount).toHaveText("ACCOUNT DELETED!")


}
)
}
)