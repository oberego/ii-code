import homePage from "../pageObjects/homePage.js"
import productPage from "../pageObjects/productPage.js"


describe("Ecommerce Application",async()=>
{

it("Search Product",async()=>
{
await browser.url("https://automationexercise.com/")
await expect(browser).toHaveTitle("Automation Exercise")
await homePage.productsButton.click()
await expect(browser).toHaveTitle("Automation Exercise - All Products")
await productPage.searchField.setValue("jeans")
await productPage.search.click()
await expect (await productPage.SEARCHEDPRODUCTS).toHaveText("SEARCHED PRODUCTS")
await expect (await productPage.jeans).toExist("jeans")

}
)
}
)