class loginPage
{

get loginForm()
{
    return $("div[class='login-form'] h2")
}

get emailLogin()
{
    return $("input[data-qa='login-email']")
}

get password()
{
   return  $("input[placeholder='Password']")
}

get login()
{
    return $("button[data-qa='login-button']")
}

get newUserSignup()
{
    return $("div[class='signup-form'] h2")
}


get Name()
{
    return $("input[placeholder='Name']")
}

get EmailSignup()
{
    return $("input[data-qa='signup-email']")
}

get signup()
{
    return $("button[data-qa='signup-button']")
}

    
async signin(emailLogin,password)
{
   await this.emailLogin.setValue(emailLogin)
   await this.password.setValue(password)
   await this.login.click()
    
}

async signingup(Name,EmailSignup)
{
   await this.Name.setValue(Name)
   await this.EmailSignup.setValue(EmailSignup)
   await this.signup.click()
    
}



}

export default new loginPage()

