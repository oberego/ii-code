class homePage
{

get productsButton()
{
    return $("a[href='/products']")        
}

get cart()
{
    return $("a[href='/view_cart']")
       
}

get SignupLogin()
{
    return $("a[href='/login']")    
}

get loggedIn()
{
    return $("li:nth-child(10) a:nth-child(1)")
}



}

export default new homePage()

