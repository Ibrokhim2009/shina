import React, { useContext, useEffect } from 'react'
import { Context } from '../../../../App'
import { FaTrashAlt } from 'react-icons/fa'
import { MdOutlineEdit } from 'react-icons/md'
import axios from 'axios'
import { prodUrl } from '../../../../../Urls'
import { useNavigate } from 'react-router-dom'
import Products from '../../../userComponent/products/Products'

function AdminTable() {
    const { product, setProduct } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        async function tagleAdminGetHandler() {
            try {
                const rezult = await axios.get(prodUrl)
                setProduct(rezult.data)
                console.log(rezult.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        tagleAdminGetHandler()
    }, [])
    const handleDelete = (id) => {
        axios.delete(`${prodUrl}${id}/`)
    };
    return (
        <>
            {product.length > 0 ? (

                <table className=' m-auto rounded-xl w-[100%]'>
                    <thead className='w-[100%] items-center  text-[8px] sm:text-[16px] md:text-[18px] flex justify-center'>
                        <tr className='flex items-center justify-between w-[100%]'>
                            <th className='w-[7%] text-center'>#</th>
                            <th className='w-[15%]'>Brand</th>
                            <th className='w-[15%]'>Name</th>
                            <th className='w-[10%]'>Price</th>
                            <th className='w-[20%]'>Description</th>
                            <th className='w-[18%]'>Image</th>
                            <th className='w-[20%]'>Others</th>
                        </tr>
                    </thead>
                    <tbody className='flex w-[100%] px-[10px] md: items-center justify-center flex-col'>
                        {product?.map((item, index) => (
                            <tr key={item.id} className='flex odd:bg-[white] even:bg-slate-50 w-[100%] items-center justify-between'>
                                <td className='w-[7%] text-[10px] sm:text-[16px] border-r border-r-slate-400 border-solid text-center'>
                                    {index + 1}
                                </td>
                                <td className='w-[15%] text-[8px] border-r border-r-slate-400 border-solid sm:text-[14px] md:text-[18px] text-center'>
                                    {item.brand}
                                </td>
                                <td className='w-[15%] text-[8px] border-r border-r-slate-400 border-solid sm:text-[14px] md:text-[18px] text-center'>
                                    {item.title}
                                </td>
                                <td className='w-[10%] text-[8px] border-r border-r-slate-400 border-solid sm:text-[14px] md:text-[18px] text-center'>
                                    {item.price}
                                </td>
                                <td className='w-[20%] text-[8px] border-r border-r-slate-400 border-solid sm:text-[14px] md:text-[18px] text-center'>
                                    {item.description}
                                </td>
                                <td className='w-[18%] text-[8px] sm:text-[12px] text-center'>
                                    <img className='max-h-[40px] w-[100%]' src={item.image} alt="" />
                                </td>
                                <td className='w-[20%] flex items-center gap-2 px-[8px] justify-center text-[12px] md:text-[16px] text-center'>
                                    <button onClick={() => handleDelete(item.id)} className='text-[14px] py-[4px] bg-[green] text-[white] w-[40%] border flex items-center justify-center'>
                                        <FaTrashAlt />
                                    </button>
                                    <button onClick={() => navigate(`/admin/${item.id}`)} className='text-[14px] md:text-[16px] py-[4px] bg-[#a10f0f] text-white w-[40%] border flex items-center justify-center'>
                                        <MdOutlineEdit />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            )
                :
                <div className='m-auto'>
                    <h1 className='text-[30px]'>Продуктов нет</h1>
                </div>
            }
        </>
    )
}

export default AdminTable