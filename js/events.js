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

function removeOldCards(){
    let container = document.querySelector('.container')
    container.remove()
}


export function updateData(products){
    if (localStorage.getItem('products') !== null) {
        products = JSON.parse(localStorage.getItem('products'))
        console.log("data updated")
        console.log(products)
    } 
    else{
        console.log('the local storage is empty');
    }
    return products
}

export function declareHomeBtn(){
    let homeIcon = document.querySelector('#home')
    homeIcon.addEventListener('click', () => {
        let main = document.querySelector('main')
        removeAllChildNodes(main)
        location.reload()
    })
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function show(_className) {
    document.querySelector(`.${_className}`).style.display = 'block'
}