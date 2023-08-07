import data from './data.js'
import createNavBer from './nav_br.js'
import showProducts from './showProducts.js'
import {declareNavEvent, declareInputSearchEvent, declareDeleteProduct} from './events.js'
import { declareOpenProductEvent, declareNavProductEvents } from './productPage.js'
import { declareAddProductEvent } from './addProduct.js'
data.forEach((product) => {
    product.quantity = Math.round(Math.random() * 100)
})
const main = document.querySelector('main')
const displainer = main.querySelector('.displainer')
let navBr = createNavBer()
let productsHead = document.createElement('h2')
productsHead.textContent = 'Products'
let productsShow = showProducts(data)
displainer.append(navBr)
displainer.append(productsHead)
displainer.append(productsShow)
declareNavEvent(data, showProducts)
declareInputSearchEvent(data, showProducts)
declareDeleteProduct(data)
declareOpenProductEvent(data)
declareAddProductEvent()
