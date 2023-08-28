// import { declareEditProductPageEvent } from "./editProduct";
import utils from './Utils.js'
export function showProducts(products){
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('container')
    products.forEach((product) => {
        let productCard = createProductCard(product)
        productsContainer.append(productCard)
    });
    return productsContainer
}

function createProductCard(product){
    let card = document.createElement('div');
    card.id = product.id;
    let imgDiv = document.createElement('div');
    let restDiv = document.createElement('div')
    // imgDiv.style.backgroundColor = 'white'

    let img = document.createElement('img')
    img.src = `${product.image}`
    // img.width = "300px"

    // let cardBottom = document.createElement('div')
    let title = document.createElement('p')
    title.textContent = product.title
    let separateLine = document.createElement('hr')
    let iconsDiv = document.createElement('div')
    let deleteIcon = document.createElement('i')
    let editIcon = document.createElement('i')
    editIcon.id = `edit${product.id}`

    deleteIcon.innerHTML = 'delete'
    editIcon.innerHTML = 'create'

    // add class
    card.classList.add('productCard')
    imgDiv.classList.add('imgDiv')
    restDiv.classList.add('rest-div')
    deleteIcon.classList.add('material-icons')
    editIcon.classList.add('material-icons')
    editIcon.classList.add('create')
    deleteIcon.classList.add('delete')
    editIcon.classList.add('edit')



    imgDiv.appendChild(img)
    iconsDiv.append(deleteIcon, editIcon)
    restDiv.append(title,separateLine,iconsDiv)
    card.append(imgDiv, restDiv)
    

    return card
}

export function declareDeleteProduct(products){
    let cards = document.getElementsByClassName('productCard')
    for(let i = 0; i < cards.length; i++){
        let delBtn = cards[i].querySelector('.delete')
        let currentCard = cards[i]
        delBtn.addEventListener('click', async (e) =>{
            e.stopPropagation()
            let cardIndex = products.findIndex((product) => {
                return Number(product.id) === Number(currentCard.id)
            })
            console.log(currentCard.id, typeof currentCard.id);
            const message = await utils.deleteData(Number(currentCard.id))
            currentCard.remove()
        })
    }
}

