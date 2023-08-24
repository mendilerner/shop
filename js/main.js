import originalData from './data.js'
import createNavBer from './nav_br.js'
import {showProducts, declareDeleteProduct} from './showProducts.js'
import {declareNavEvent, declareInputSearchEvent, updateData, declareHomeBtn} from './events.js'
import { declareOpenProductEvent} from './productPage.js'
import { declareAddProductPageEvent} from './addProduct.js'
import { declareEditEvents } from './editProduct.js'
import Utils from './Utils.js'
// update data with local storage
// localStorage.removeItem('products')
const data = await Utils.fetchData()
data.forEach((product) => {
    product.quantity = Math.round(Math.random() * 100)
})
// get containers
const main = document.querySelector('main')
const displainer = main.querySelector('.displainer')

// create home page
let navBr = createNavBer()

let productsHead = document.createElement('h2')
productsHead.textContent = 'Products'
// create all products card
let productsShow = showProducts(data)

displainer.append(navBr)
displainer.append(productsHead)
displainer.append(productsShow)

// declare home page events:

declareAddProductPageEvent(data) // add product btn event

declareHomeBtn()  // home btn event

declareNavEvent(data, showProducts)  // nav events

declareInputSearchEvent(data, showProducts) // search-box event

declareDeleteProduct(data)  // delete button

declareOpenProductEvent(data)  // open product page event

declareEditEvents(data)  // edit event



