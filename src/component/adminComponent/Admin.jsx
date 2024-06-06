import React, { useContext } from 'react'
import { Context } from '../../App'
import { prodUrl } from '../../../Urls'
import axios from 'axios'

function Admin() {
    const { product, setProduct } = useContext(Context)
    const productHandler = e => {
        e.preventDefault()
        const forma = new FormData(e.target)
        const { title, brand, description, price, size } = Object.fromEntries(forma.entries())
        const addProduct = {
            title,
            brand,
            description,
            price,
            size
        }
        try {
            axios.post(prodUrl, addProduct)
                .then(res => {
                    console.log('ishladi');
                    setProduct([product, addProduct])
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <form onSubmit={productHandler}>
            <input type="text" name="title" id="" placeholder='title' />
            <input type="text" name="brand" id="" placeholder='brand' />
            <input type="text" placeholder='description' name="des" id="" />
            <input type="number" placeholder='price' name="price" id="" />
            <input type="text" name="size" id="" />
            <button>
                Add product
            </button>
        </form>
    )
}

export default Admin