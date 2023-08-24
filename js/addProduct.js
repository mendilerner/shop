export function declareAddProductPageEvent(data) {
    let addIcon = document.querySelector('#add-icon')
    addIcon.addEventListener('click', () => {
        console.log('declareEditEvents')
        if (document.querySelector('.add-product-PAGE') === null) {
            let backIcon = document.createElement('i')
            backIcon.textContent = 'arrow_back'
            backIcon.classList.add('material-icons')
            let addProductHead = document.createElement('h2')
            addProductHead.textContent = 'Add New Product'
            let headDiv = document.createElement('div')
            headDiv.classList.add('order-head')
            headDiv.append(backIcon, addProductHead)
            let main = document.querySelector('main')
            let containerDiv = document.createElement('div')
            containerDiv.classList.add('container')
            let newForm = createAddForm()
            newForm.classList.add('contain-form-add')
            containerDiv.appendChild(newForm)
            let bigContainerDiv = document.createElement('div')
            bigContainerDiv.classList.add('add-product-PAGE')
            // main.removeChild(main.firstChild)
            bigContainerDiv.append(headDiv, containerDiv)
            main.append(bigContainerDiv)
            declareAddBtnEvent(data)
            hide('add-product-PAGE','displainer')
            // hide('add-product-PAGE', 'displainer', 'product-PAGE')
        }
    })
}

function createAddForm() {
    let form = document.createElement('form')
    let formBtn = createBtnForm('Add', 'edit_btn_id')
    addFieldToForm('Title', 'Add Title...', form, 'title_id')
    addFieldToForm('Category', 'Add Category...', form, 'category_id')
    addFieldToForm('Price', 'Add Price...', form, 'price_id')
    addFieldToForm('Image URL', 'Add Image URL...', form, 'image_id')
    addFieldToForm('Quantity', 'Add Quantity...', form, 'quantity_id')
    let labelDescription = document.createElement('label')
    labelDescription.textContent = 'Description'
    labelDescription.for = 'description_id'
    let descriptionInput = document.createElement('textarea')
    console.log(labelDescription.textContent)
    descriptionInput.id = 'description_id'
    descriptionInput.placeholder = 'Add Description...'
    labelDescription.append(descriptionInput)
    form.append(labelDescription)
    form.append(formBtn)
    return form
}

function addFieldToForm(_labelText, _placeHolder, _form, _id) {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.id = _id
    label.for = _id
    label.textContent = _labelText
    input.placeholder = _placeHolder
    _form.append(label, input)
    return [label, input]
}

function hide(chooseContainer,...class_Name) {
    for (let clas of class_Name) {
        let container = document.querySelector(`.${clas}`);
        if (container !== null){
            container.style.display = 'none'
        } 
    }
    document.querySelector(`.${chooseContainer}`).style.display = 'block'

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

export function declareAddBtnEvent(products) {
    let btn = document.querySelector('#edit_btn_id');
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        let form = document.querySelector('form')
        // let formFields = document.querySelector('#title_id')
        // console.log(formFields)
        let newProduct = {
            id: products.length,
            title: document.querySelector('#title_id').value,
            price: document.querySelector('#price_id').value,
            description: document.querySelector('#description_id').value,
            category: document.querySelector('#category_id').value,
            image: document.querySelector('#image_id').value,
            rating: { rate: Math.trunc(Math.random() * 5, 1), count: Math.round(Math.random() * 100)},
            quantity: Number(document.querySelector('#quantity_id').value)
        }
        let flag = Object.keys(newProduct).every((key) => { return (newProduct[key].toString()).length > 0 })
        console.log(flag)
        if (flag) {
            products.push(newProduct)
            localStorage.setItem('products', JSON.stringify(products));
        }
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

