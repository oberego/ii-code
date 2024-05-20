class paymentPage
{



get nameOnCard()
{
    return  $("input[name='name_on_card']")
}

get cardNumber()
{
    return $("input[name='card_number']")
}

get cvc()
{
    return $("input[placeholder='ex. 311']")
}

get expMM()
{
    return $("input[placeholder='MM']")
}

get expYYYY()
{
    return $("input[placeholder='YYYY']")
}

get payConfirmOrder()
{
    return $("#submit")
}

get successMessage()
{
    return $("div[id='success_message']") 
    
}

get congratsMessage()
{
    return $("div[class='col-sm-9 col-sm-offset-1'] p")
}



}
export default new paymentPage()


