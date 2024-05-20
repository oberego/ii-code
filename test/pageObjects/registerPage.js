class registerPage
{

get Header()
{
    return $("//b[normalize-space()='Enter Account Information']")            
}
    
get titleMr()
{
    return $("#id_gender1")        
}

get password()
{
    return $("#password")
}

get dobDay()
{
    return $("#days")
}

get dobMonth()
{
    return $("#months")
}

get dobYear()
{
    return $("#years")
}

get newsLetter()
{
    return $("#newsletter")
}

get offers()
{
    return $("#optin")
}

get firstName()
{
    return $("#first_name")
}

get lastName()
{
    return $("#last_name")
}


get company()
{
    return $("#company")
}

get address1()
{
    return $("#address1")
}

get address2()
{
    return $("#address2")
}

get country()
{
    return $("#country")
}

get state()
{
    return $("#state")
}

get city()
{
    return $("#city")
}

get zipcode()
{
    return $("#zipcode")
}


get mobile()
{
    return $("#mobile_number")
}

get createAccount()
{
    return $("button[data-qa='create-account']")
}

get accountCreated()
{
    return $ ("h2[class='title text-center'] b")
}

get continueButton()
{
    return $(".btn.btn-primary")
}

get loggedIn()
{
    return $ ("li:nth-child(10) a:nth-child(1)")
}

get deliveryfullName()
{
    return $("ul[id='address_delivery'] li[class='address_firstname address_lastname']")
}

get deliveryCompany()
{
    return $("ul[id='address_delivery'] li:nth-child(3)")
}

get deliveryAdd1()
{
    return $("ul[id='address_delivery'] li:nth-child(4)")    
}

get deliveryAdd2()
{
    return $("ul[id='address_delivery'] li:nth-child(5)")
}

get deliveryCSZ()
{
    return $("ul[id='address_delivery'] li[class='address_city address_state_name address_postcode']")
}

get deliverCountry()
{
    return $("ul[id='address_delivery'] li[class='address_country_name']")
}

get deliveryMobile()
{
    return $("ul[id='address_delivery'] li[class='address_phone']")
}

get billingfullName()
{
    return $("ul[id='address_invoice'] li[class='address_firstname address_lastname']")
}

get billingCompany()
{
    return $("ul[id='address_invoice'] li:nth-child(3)")
}

get billingAdd1()
{
    return  $("ul[id='address_invoice'] li:nth-child(4)")    
}

get billingAdd2()
{
    return $("ul[id='address_invoice'] li:nth-child(5)")
}

get billingCSZ()
{
    return $("ul[id='address_invoice'] li[class='address_city address_state_name address_postcode']")
}

get billingCountry()
{
    return $("ul[id='address_invoice'] li[class='address_country_name']")
}

get billingMobile()
{
    return $("ul[id='address_invoice'] li[class='address_phone']")
}

get deleteAccount()
{
    return $("a[href='/delete_account']")
}

get VerifyDeletedAccount()
{
    return $("h2[class='title text-center'] b")
}





}

export default new registerPage()

