import homePage from "../pageObjects/homePage.js"
import loginPage from "../pageObjects/loginPage.js"
import registerPage from "../pageObjects/registerPage.js"
import cartPage from "../pageObjects/cartPage.js"
import productPage from "../pageObjects/productPage.js"
import paymentPage from "../pageObjects/paymentPage.js"



describe("Ecommerce Application",async()=>
{

it("Place Order",async()=>
{
await browser.url("https://automationexercise.com/")
await expect(browser).toHaveTitle("Automation Exercise")
await homePage.productsButton.click()
await expect(browser).toHaveTitle("Automation Exercise - All Products")
await productPage.searchField.setValue("grunt")
await productPage.search.click()
await productPage.grunt.click()
await productPage.continueShopping.waitForDisplayed()
await productPage.continueShopping.click()
await homePage.cart.click()
await expect(browser).toHaveTitle("Automation Exercise - Checkout")
await cartPage.proceedToCheckout.click()
await cartPage.RegisterLogin.waitForDisplayed()
await cartPage.RegisterLogin.click()
await loginPage.signingup("Bendel","opon@yajohoo.ooh")
await registerPage.titleMr.click()
await registerPage.password.setValue("apurchase")
await registerPage.dobDay.selectByVisibleText("20")
await registerPage.dobMonth.selectByVisibleText("May")
await registerPage.dobYear.selectByVisibleText("1970")
await registerPage.newsLetter.click()
await registerPage.offers.click()
await registerPage.firstName.setValue("Benjy")
await registerPage.lastName.setValue("Test")
await registerPage.company.setValue("interaction")
await registerPage.address1.setValue("120")
await registerPage.address2.setValue("deansgate")
await registerPage.country.selectByVisibleText("Israel")
await registerPage.state.setValue("London")
await registerPage.city.setValue("Holborn")
await registerPage.zipcode.setValue("EC23NW")
await registerPage.mobile.setValue("012345678910")
await registerPage.createAccount.click()
await expect (await registerPage.accountCreated).toHaveText("ACCOUNT CREATED!")
await registerPage.continueButton.click()
await expect (await registerPage.loggedIn).toHaveText("Logged in as Bendel")
await homePage.cart.click()
await cartPage.proceedToCheckout.click()

const deliveryDetails = [registerPage.deliveryfullName,registerPage.deliveryCompany,registerPage.deliveryAdd1,registerPage.deliveryAdd2,registerPage.deliveryCSZ,registerPage.deliverCountry,registerPage.deliveryMobile]
await expect (await deliveryDetails[0]).toHaveText("Mr. Benjy Test")
await expect (await deliveryDetails[1]).toHaveText("interaction")
await expect (await deliveryDetails[2]).toHaveText("120")
await expect (await deliveryDetails[3]).toHaveText("deansgate")
await expect (await deliveryDetails[4]).toHaveText("Holborn London EC23NW")
await expect (await deliveryDetails[5]).toHaveText("Israel")
await expect (await deliveryDetails[6]).toHaveText("012345678910")
await browser.pause(3000)

const billingDetails = [registerPage.billingfullName,registerPage.billingCompany,registerPage.billingAdd1,registerPage.billingAdd2,registerPage.billingCSZ,registerPage.billingCountry,registerPage.billingMobile]
await expect (await billingDetails[0]).toHaveText("Mr. Benjy Test")
await expect (await billingDetails[1]).toHaveText("interaction")
await expect (await billingDetails[2]).toHaveText("120")
await expect (await billingDetails[3]).toHaveText("deansgate")
await expect (await billingDetails[4]).toHaveText("Holborn London EC23NW")
await expect (await billingDetails[5]).toHaveText("Israel")
await expect (await billingDetails[6]).toHaveText("012345678910")
await browser.pause(3000)

await cartPage.description.setValue("urgent")
await cartPage.placeOrder.click()
await paymentPage.nameOnCard.setValue("benjy Test")
await paymentPage.cardNumber.setValue("1234567890")
await paymentPage.cvc.setValue("123")
await paymentPage.expMM.setValue("05")
await paymentPage.expYYYY.setValue("2028")
await paymentPage.payConfirmOrder.click()
//await expect (await paymentPage.successMessage).toHaveText("Your order has been placed successfully!")
await expect (await paymentPage.congratsMessage).toHaveText("Congratulations! Your order has been confirmed!")
await registerPage.deleteAccount.click()
await expect (await registerPage.VerifyDeletedAccount).toHaveText("ACCOUNT DELETED!")
await registerPage.continueButton.click()


}
)
}
)