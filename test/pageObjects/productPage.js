class productPage
{



get searchField()
{
    return $("#search_product")
}

get search()
{
    return $(".fa.fa-search")
}

get SEARCHEDPRODUCTS()
{
    return $(".title.text-center")
}

get jeans()
{
    return $ (".features_items")
}

get grunt()
{
    return  $("div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']")
}

get continueShopping()
{
    return $(".btn.btn-success.close-modal.btn-block")
    
}

get cart()
{
    return $("a[href='/view_cart']")
      
}





}

export default new productPage()

