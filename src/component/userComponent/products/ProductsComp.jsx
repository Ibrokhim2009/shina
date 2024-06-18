import axios from 'axios'
import React, { useContext, useState } from 'react'
import { prodUrl } from '../../../../Urls'
import { Context } from '../../../App'
import { CiMenuKebab } from 'react-icons/ci'
import { SlBasket } from 'react-icons/sl'
import { FaHeart } from 'react-icons/fa'

function ProductsComp({ item }) {
    const { handleDelete, tokenState, basketCard, setBasketCard } = useContext(Context)
    const [menuShow, setMenuShow] = useState(false)
    const addToCart = () => {
        setBasketCard([basketCard, item]);
        console.log([basketCard, item])
    };  
    return (
        <div className='w-[100%] hover:shadow-[0px_0px_15px_#cdcdcd] transition-all duration-300 flex items-start pb-[20px] justify-center rounded-xl flex-col pl-[10px] bg-slate-200'>
            <div className='flex flex-col items-end'>
                <img className='max-w-[300px] max-h-[300px] rounded-full mt-[20px] bg-[#42548a] p-[10px] mb-[10px]' src={item?.image} alt="" />
            </div>
            <h1 className='text-[40px] font-light'>{item?.title}</h1>
            <p className='text-[20px] flex items-center gap-2 text-[gray]'>
                Цена: <p className='text-[18px] font-[500] text-black'>{item?.price}{item.currence}</p>
            </p>
            <div className='w-[100%] flex items-center pr-[10px] mt-[10px] gap-[20px] justify-start'>
                <button onClick={addToCart} className='text-[28px] flex items-center justify-center m-auto  text-[white] w-[90%] h-[40px] rounded-md bg-[green]'>
                    <SlBasket />
                </button>
                {/* <button className='text-[24px] flex items-center justify-center w-[30%] h-[40px] rounded-md bg-slate-500'>
                    <FaHeart />
                </button> */}
            </div>
        </div>
    )
}

export default ProductsComp