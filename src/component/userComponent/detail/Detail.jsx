import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../../App'
import Contact from '../contact/Contact'

function Detail({ item }) {
    const { product } = useContext(Context)
    const { id } = useParams()
    const detailProduct = product.find(element => element.id == id)
    console.log(detailProduct)
    return (
        <div>
            <div className='w-[100%] md:flex-row flex-col flex items-center gap-[30px]'>
                <img className='md:w-[50%] rounded-[16px] w-[100%] bg-[red] h-[350px]' src={detailProduct ? detailProduct.image : ''} alt="" />
                <div className='md:w-[50%] w-[100%] text-[gray] flex flex-col'>
                    <h1 className='md:text-[60px] text-[50px] text-black font-medium'>{detailProduct ? detailProduct?.title : 'Ballon'}</h1>
                    <h1 className='md:text-[24px] text-[20px] flex items-end mb-[10px] gap-[10px]'>Бренд: {detailProduct?.brand}</h1>
                    <h1 className='md:text-[20px] text-[18px] mb-[10px] flex items-start gap-[10px]'>Описание: {detailProduct?.description}</h1>
                    <h1 className='md:text-[24px] text-[20px] flex items-end gap-[10px]'>Цена: {detailProduct?.price} {detailProduct?.currency}</h1>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Detail