import utils from './Utils.js'
export function declareEditEvents(data) {
    let editButtons = document.getElementsByClassName('edit')
    for (let i = 0; i < editButtons.length; i++) {
        let productId = editButtons[i].id
        declareEditProductPageEvent(data, `${productId}`)
    }
}
export function declareEditProductPageEvent(products, editBtnId) {
    let editBtn = document.querySelector(`#${editBtnId}`)
    editBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        if (document.querySelector('.edit-product-PAGE') === null) {
            let backIcon = document.createElement('i')
            backIcon.textContent = 'arrow_back'
            backIcon.classList.add('material-icons')
            let addProductHead = document.createElement('h2')
            addProductHead.textContent = 'edit Product'
            let headDiv = document.createElement('div')
            headDiv.classList.add('order-head')
            headDiv.append(backIcon, addProductHead)
            let main = document.querySelector('main')
            let containerDiv = document.createElement('div')
            containerDiv.classList.add('container')
            let newForm = createEditForm(products, editBtn.id.slice(4))
            newForm.classList.add('contain-form-add')
            containerDiv.appendChild(newForm)
            let bigContainerDiv = document.createElement('div')
            bigContainerDiv.classList.add('edit-product-PAGE')
            // main.removeChild(main.firstChild)
            bigContainerDiv.append(headDiv, containerDiv)
            main.append(bigContainerDiv)
            declareEditBtnEvent(products, Number(editBtn.id.slice(4)))
            hide('edit-product-PAGE', 'displainer', 'product-PAGE')
        }
    })
}

function createEditForm(products, productId) {
    let productIndex = products.findIndex((product) => {
        return Number(product.id) === Number(productId)
    })
    let form = document.createElement('form')
    let formBtn = createBtnForm('Edit', 'edit_btn_id')
    addFieldToForm('Title', products[productIndex].title, 'Add Title...', form, 'title_id')
    addFieldToForm('Category', products[productIndex].category, 'Add Category...', form, 'category_id')
    addFieldToForm('Price', products[productIndex].price, 'Add Price...', form, 'price_id')
    addFieldToForm('Image URL', products[productIndex].image, 'Add Image URL...', form, 'image_id')
    addFieldToForm('Quantity', products[productIndex].quantity, 'Add Quantity...', form, 'quantity_id')
    // add description textarea
    let labelDescription = document.createElement('label')
    labelDescription.textContent = 'Description'
    labelDescription.for = 'description_id'
    let descriptionInput = document.createElement('textarea')
    console.log(labelDescription.textContent)
    descriptionInput.id = 'description_id'
    descriptionInput.placeholder = 'Add Description...'
    descriptionInput.value = products[productIndex].description
    labelDescription.append(descriptionInput)
    // app to DOM
    form.append(labelDescription)
    form.append(formBtn)
    return form
}

function addFieldToForm(_labelText, _inputValue, _placeHolder, _form, _id) {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.id = _id
    label.for = _id
    label.textContent = _labelText
    input.placeholder = _placeHolder
    input.value = _inputValue
    _form.append(label, input)
    return [label, input]
}

function hide(...class_Name) {
    for (let clas of class_Name) {
        let container = document.querySelector(`.${clas}`);
        if (container !== null) {
            container.style.display = 'none'
        }
    }
    document.querySelector(`.${class_Name[0]}`).style.display = 'block'

}
function show(_className) {
    document.querySelector(`.${_className}`).style.display = 'block'
}

function createBtnForm(_text, _id) {
    let btn = document.createElement('button')
    btn.textContent = _text
    btn.classList.add('btn-form')
    btn.id = _id
    return btn
}

function declareEditBtnEvent(products, _id) {
    let btn = document.querySelector('#edit_btn_id');
    btn.addEventListener('click', async (e) => {
        e.stopPropagation()
        // let form = document.querySelector('form')
        // let formFields = document.querySelector('#title_id')
        // console.log(formFields)
        let newProduct = {
            id: Number(_id),
            title: document.querySelector('#title_id').value,
            price: Number(document.querySelector('#price_id').value),
            description: document.querySelector('#description_id').value,
            category: document.querySelector('#category_id').value,
            image: document.querySelector('#image_id').value,
            rating: { rate: Math.trunc(Math.random() * 5, 1), count: Math.round(Math.random() * 100) },
            quantity: Number(document.querySelector('#quantity_id').value)
        }
        console.log(newProduct)
        let checkValid = Object.keys(newProduct).every((key) => { return (newProduct[key].toString()).length > 0 })
        console.log(checkValid)
        if (checkValid) {
            let productIndex = products.findIndex((product) => {
                return Number(newProduct.id) === Number(product.id)
            })
            // products.splice(productIndex, 1 ,newProduct)
            // console.log(products)
            // localStorage.setItem('products', JSON.stringify(products));
            const message = await utils.editProduct(newProduct)
            console.log(message);
        }
        // location.reload()
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}