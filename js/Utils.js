const fetchData = async () => {
    const res = await fetch('https://calm-jade-worm-belt.cyclic.cloud/api/products')
    const data = await res.json()
    console.log(data);
    return data
}

const addProduct = async (product) => {
    const options = {
        method: "POST",
        body: product
    }
    const res = await fetch('https://calm-jade-worm-belt.cyclic.cloud/api/products', options)
    const message = (res.json())
    return message
}


const funcs = {fetchData}
export default funcs