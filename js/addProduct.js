export function declareAddProductEvent(){
    let addIcon = document.querySelector('#add-icon')
    addIcon.addEventListener('click', () => {
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
        hide('displainer')
        let newForm = createAddForm()
        newForm.classList.add('contain-form-add')
        containerDiv.appendChild(newForm)
        main.append(headDiv, containerDiv)
    })
}

function createAddForm(){
    let form = document.createElement('form')
    addFieldToForm('Title','Add Title...', form, 'title_id')
    addFieldToForm('Category','Add Category...', form, 'category_id')
    addFieldToForm('Price','Add Price...', form, 'price_id')
    addFieldToForm('Image URL','Add Image URL...', form, 'image_id')
    addFieldToForm('Quantity','Add Quantity...', form, 'quantity_id')
    let labelDescription = document.createElement('label')
    labelDescription.textContent = 'Description'
    labelDescription.for = 'description_id'
    let descriptionInput = document.createElement('textarea')
    console.log(labelDescription.textContent)
    descriptionInput.id = 'description_id'
    descriptionInput.placeholder ='Add Description...'
    labelDescription.append(descriptionInput)
    form.append(labelDescription)
    return form
}

function addFieldToForm(_labelText, _placeHolder, _form, _id){
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.id = _id
    label.for = _id
    label.textContent = _labelText
    input.placeholder = _placeHolder
    _form.append(label, input)
    return [label, input]
}

function hide(_className) {
    document.querySelector(`.${_className}`).style.display = 'none'
}
function show(_className) {
    document.querySelector(`.${_className}`).style.display = 'block'
}

function createBtnForm(_text,_id,){
    let btn = document.createElement('button')
    btn.textContent = _text
    btn.classList.add('btn-form')
}