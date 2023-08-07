export function declareNavEvent(products, show){
    let nav = document.querySelector('nav')
    let categories = nav.getElementsByTagName('li')
    for(let i =0; i < categories.length; i++){
        categories[i].addEventListener('click', () => { 
            removeOldCards()
            for(let category of categories){
                category.style.backgroundColor = "#FEBE9C";
            }
            categories[i].style.backgroundColor = '#ffe2d2'
            let productsOfCategory = filterProductByCategory(products, categories[i].textContent)
            let displainer = document.querySelector('.displainer')
            displainer.append(show(productsOfCategory))
        })
    }
}

function filterProductByCategory(products, category){
    if (category.toLowerCase() === 'all products'){
        return products
    }
    let filteredProducts = products.filter((product) => {
        return product.category.toLowerCase().startsWith(category.toLowerCase())})
    return filteredProducts
}

export function declareInputSearchEvent(products, show){
    let nav = document.querySelector('nav');
    let searchBtn = nav.querySelector('button');
    let searchInput = nav.querySelector('input')
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        let inputValue = searchInput.value;
        let resultProducts = filterProductBySearchInput(products,inputValue)
        if (resultProducts){
            removeOldCards()
            let displainer = document.querySelector('.displainer')
            displainer.append(show(resultProducts))}
    })


}
function filterProductBySearchInput(products, inputValue){
    if (inputValue.trim() === ""){
        return products
    }
    else if (inputValue){
        let filteredProductsInput = products.filter((product) => {
            return product.category.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.title.toLowerCase().includes(inputValue.toLowerCase()) })
            // console.log(filteredProductsInput)
        return filteredProductsInput
    }
    else{
        return false
    }
}

export function declareDeleteProduct(products){
    let cards = document.getElementsByClassName('productCard')
    for(let i = 0; i < cards.length; i++){
        let delBtn = cards[i].querySelector('.delete')
        let currentCard = cards[i]
        delBtn.addEventListener('click', () =>{
            let cardIndex = products.findIndex((product) => {
                return Number(product.id) === Number(currentCard.id)
            })
            // console.log("current card id", currentCard.id)
            // console.log(cardIndex)
            // console.log("product id", products[cardIndex].id)
            products.splice(cardIndex,1)
            currentCard.remove()
        })
    }
}
function removeOldCards(){
    let container = document.querySelector('.container')
    container.remove()
}
