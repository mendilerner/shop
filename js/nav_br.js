function createNavBer(){
    let nav = document.createElement('nav')
    let ul = document.createElement('ul')
    const listItems = ['All Products', 'Men', 'Women', 'Jewelery','Electronics']
    for(let item of listItems){
        let li = document.createElement('li')
        li.textContent = item
        ul.append(li)
    }
    let searchBox = document.createElement('div') 
    let form = document.createElement('form')
    let searchInput = document.createElement('input')
    let searchBtn = document.createElement('button')
    let icon = document.createElement('i')
    searchBtn.appendChild(icon)
    form.append(searchInput, searchBtn)
    searchBox.appendChild(form)

    // add class
    searchBox.classList.add('search-box')
    form.classList.add('search-bar')
    icon.classList.add('material-icons')

    // add some attribute
    searchInput.type = 'text'
    searchInput.placeholder = 'Search'
    icon.innerHTML = 'search'

    // add to nav
    nav.append(ul, searchBox)
    return nav
}

export default createNavBer;

