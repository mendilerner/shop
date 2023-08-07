export function declareOpenProductEvent(products) {
    let cards = document.getElementsByClassName('productCard')
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]
        card.addEventListener('click', () => {
            let productCard = products.find((product) => {
                return Number(product.id) === Number(card.id)
            })
            hide('displainer')
            let editBtnId = `edit${productCard.id}`
            let navProdactPage = createNavProductPage(editBtnId)
            let cardPage = createProductPage(productCard)
            let main = document.querySelector('main')
            let containerDiv = document.createElement('div')
            containerDiv.classList.add('container')
            containerDiv.classList.add('product-PAGE')
            containerDiv.classList.add('full-width')
            // main.classList.add('center')
            containerDiv.append(navProdactPage, cardPage)
            main.append(containerDiv)
            declareNavProductEvents(editBtnId)
        })
    }
}

function hide(_className) {
    document.querySelector(`.${_className}`).style.display = 'none'
}
function show(_className) {
    document.querySelector(`.${_className}`).style.display = 'block'
}

function createProductPage(product) {
    let card = document.createElement('div');
    card.id = `c${product.id}`;
    let imgDiv = document.createElement('div');
    let img = document.createElement('img')
    img.src = `${product.image}`
    let restDiv = document.createElement('div')

    let title = addDetails('Title: ', product.title)
    let description = addDetails('Description: ', product.description)
    let category = addDetails('Category: ', product.category)
    let price = addDetails('Price: ', product.price)
    let quantity = addDetails('Quantity: ', product.quantity)

    // add class
    card.classList.add('productPage')

    imgDiv.appendChild(img)
    restDiv.append(...title, ...description, ...category, ...price, ...quantity)
    card.append(imgDiv, restDiv)

    return card
}

function addDetails(field, value) {
    let fieldHead = document.createElement('h2')
    fieldHead.textContent = field;
    let fieldValue = document.createElement('p')
    fieldValue.textContent = value
    return [fieldHead, fieldValue]
}

function createNavProductPage(_editBtnId) {
    const div = document.createElement('div')
    div.classList.add('nav-product-page')
    let productPageHead = document.createElement('h2')
    productPageHead.textContent = 'Product'
    productPageHead.classList.add('order-product-head')
    let homeIcon = document.createElement('i')
    let editIcon = document.createElement('i')
    let backIcon = document.createElement('i')
    backIcon.textContent = 'arrow_back'
    editIcon.innerHTML = 'home'
    homeIcon.innerHTML = 'create'
    editIcon.id = 'home'
    homeIcon.id = _editBtnId
    backIcon.id = 'arrow-back'
    homeIcon.classList.add('create')
    homeIcon.classList.add('material-icons')
    editIcon.classList.add('material-icons')
    backIcon.classList.add('material-icons')
    editIcon.classList.add('edit')
    div.append(backIcon, homeIcon, editIcon, productPageHead)
    return div
}

export function declareNavProductEvents(_editBtnId) {
    let navProductPage = document.querySelector('.nav-product-page')
    let homeIcon = navProductPage.querySelector('#home')
    let editIcon = navProductPage.querySelector(`#${_editBtnId}`)
    let backIcon = navProductPage.querySelector('#arrow-back')
    homeIcon.addEventListener('click', () => {
        removeProductPageElements()
        show('displainer')
    })
    editIcon.addEventListener('click', (e) => {
        // 

    })
    backIcon.addEventListener('click', () => {
        removeProductPageElements()
        show('displainer')
    })


}

function removeProductPageElements() {
    let productPage = document.querySelector('.productPage')
    let navProdPage = document.querySelector('.nav-product-page')
    // let addBtn = document.querySelector('#add-icon')
    navProdPage.remove()
    productPage.remove()
}