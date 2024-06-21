import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../App'
// import ProductsComp from './ProductsComp'
import axios from 'axios'
import { prodUrl } from '../../../../Urls'
import { useParams } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'

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
                {product?.map(item => (
                    <div className='w-[100%] hover:shadow-[0px_0px_15px_#cdcdcd] transition-all duration-300 flex items-start pb-[20px] justify-center rounded-xl flex-col pl-[10px] bg-slate-200'>
                        <div className='flex flex-col items-end'>
                            <img className='max-w-[300px] max-h-[300px] rounded-full mt-[20px] p-[10px] mb-[10px]' src={item?.image} alt="" />
                        </div>
                        <h1 className='text-[40px] font-light'>{item?.title}</h1>
                        <p className='text-[20px] flex items-center gap-2 text-[gray]'>
                            Цена: <p className='text-[18px] font-[500] text-black'>{item?.price}{item.currence}</p>
                        </p>
                        <div className='w-[100%] flex items-center pr-[10px] mt-[10px] gap-[20px] justify-start'>
                            <button onClick={() => addToCart(item)} className='text-[28px] flex items-center justify-center m-auto  text-[white] w-[90%] h-[40px] rounded-md bg-[green]'>
                                <SlBasket />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products