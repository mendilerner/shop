const domain = 'https://shopserver23.onrender.com'
const fetchData = async () => {
    const res = await fetch(`${domain}/api/products`)
    const data = await res.json()
    console.log(data);
    return data
}

const addProduct = async (_product) => {
    const options = {
        method: "POST",
        body: JSON.stringify(_product),
        headers: {
            "Content-Type": "application/json" // Specify that you're sending JSON data
        },
    }
    const res = await fetch(`${domain}/api/products`, options)
    const message = await res.json()
    return message
}

const deleteData = async (_id) => {
    const res = await fetch(`${domain}/api/products/${_id}`, {method: 'DELETE'})
    const message = await res.json()
    return message
}

const editProduct = async (_product) => {
    const id = _product.id
    delete _product.id;
    const options = {
        method: "PUT",
        body: JSON.stringify(_product),
        headers: {
            "Content-Type": "application/json" // Specify that you're sending JSON data
        },
    }
    const res = await fetch(`${domain}/api/products/${id}`, options)
    const message = await res.json()
    return message
}



const funcs = {fetchData ,addProduct, deleteData, editProduct}
export default funcs