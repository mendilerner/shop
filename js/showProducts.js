function showProducts(products){
    const productsContainer = document.createElement('div');
    productsContainer.classList.add('container')
    products.forEach((product) => {
        let productCard = createProductCard(product)
        productsContainer.append(productCard)
    });
    return productsContainer
}

function createProductCard(product){
    console.log(product.image);
    let card = document.createElement('div');
    let imgDiv = document.createElement('div');
    // imgDiv.style.backgroundColor = 'white'

    let img = document.createElement('img')
    img.src = `${product.image}`
    // img.width = "300px"

    let title = document.createElement('p')
    title.textContent = product.title
    let separateLine = document.createElement('hr')
    let iconsDiv = document.createElement('div')
    let deleteIcon = document.createElement('i')
    let editIcon = document.createElement('i')
    deleteIcon.innerHTML = 'delete'
    editIcon.innerHTML = 'create'

    // add class
    card.classList.add('productCard')
    imgDiv.classList.add('imgDiv')
    deleteIcon.classList.add('material-icons')
    editIcon.classList.add('material-icons')


    imgDiv.appendChild(img)
    card.append(imgDiv, title, separateLine, iconsDiv, deleteIcon, editIcon)

    return card
}

export default showProducts;