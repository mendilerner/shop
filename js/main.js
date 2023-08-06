import dataaa from './data.js'
import createHeader from './../header/header.js'
import createNavBer from './nav_br.js'
import showProducts from './showProducts.js'
const main = document.querySelector('main')
let navBr = createNavBer()
let productsShow = showProducts(dataaa)
main.append(navBr)
main.append(productsShow)
