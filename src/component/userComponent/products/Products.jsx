import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../App'
// import ProductsComp from './ProductsComp'
import axios from 'axios'
import { prodUrl } from '../../../../Urls'
import { useParams } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'
import ProductsComp from './ProductsComp'

function Products() {
    const { product, setProduct, addToCart } = useContext(Context)
    useEffect(() => {
        async function productUrlHandler() {
            try {
                const rezult = await axios?.get(prodUrl)
                setProduct(rezult?.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        productUrlHandler()
    }, [])

    return (
        <div>
            {
                product.length > 0 ? (
                    <h1 className='text-center mb-[40px] text-[50px] font-medium'>Наши Товары</h1>

                )
                    :
                    <h1 className='text-[30px] text-center font-medium'>Продуктов нет</h1>
            }
            <div className='grid h-auto w-[100%] grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[30px]'>
                {product?.map(item => <ProductsComp item={item} />)}
            </div>
        </div>
    )
}

export default Products