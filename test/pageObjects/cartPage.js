class cartPage
{



get proceedToCheckout()
{
    return $(".btn.btn-default.check_out")
}

get RegisterLogin()
{
    return $("body > section:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > p:nth-child(2) > a:nth-child(1) > u:nth-child(1)")
}

get description()
{
    return $("textarea[name='message']")
}


get placeOrder()
{
    return $(".btn.btn-default.check_out")
    
}


}

export default new cartPage()