import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { prodUrl } from '../../../../../Urls';

function AdminEdit() {
    const [adminEdit, setAdminEdit] = useState([])
    const [files, setFiles] = useState({});
    const [selectedValue, setSelectedValue] = useState('');

    const addFile = (file) => {
        setFiles(file.name)
        const isImage = file.type.match('image.*');
        const objectURL = URL.createObjectURL(file);
        setFiles(objectURL.toString().slice(5))
        if (isImage) {
            console.log(objectURL.toString().slice(5));
        }
    }
    const handleFileChange = (event) => {
        for (const file of event.target.files) {
            addFile(file);
        }
        console.log(files)
        // setSelectedFile(file);

    };
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        async function getCurrentData() {
            try {
                const res = await axios.get(`${prodUrl}/${id}`)
                setAdminEdit(res.data)
            }
            catch (err) {
                console.log(err);
            }
        }
        getCurrentData()
    }, [])
    const adminEditFormHandler = e => {
        e.preventDefault()
        setFiles({})
        console.log(files.slice(5).toString())
        const forma = new FormData(e.target)
        const { title, brand, image, description, price, size, } = Object.fromEntries(forma.entries())
        const editProduct = {
            title,
            brand,
            description,
            image: files,
            price,
            size,
            currence: selectedValue ? selectedValue : 'UZDT'
        }
        try {
            axios.put(`${prodUrl}/${id}`, editProduct)
            alert('Product ozgartirildi')
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <form onSubmit={adminEditFormHandler}>
            <div className='flex items-center flex-col gap-[14px]'>
                <div className='w-[100%] flex gap-[20px]'>
                    <input defaultValue={adminEdit?.title} required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" name="title" id="" placeholder='title' />
                    <input defaultValue={adminEdit?.brand} required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" name="brand" id="" placeholder='brand' />
                    {/* <input className='w-[100%] outline-none rounded-xl h-[50px] shadow-xl pl-[10px] text-[24px]' type="text" name="image" id="" placeholder='image' /> */}
                    <button
                        id='button'
                        type='button'
                        className='w-[100%] shadow-xl outline-none bg-[#2bb22b] text-white rounded-xl h-[50px] pl-[10px] text-[24px]'
                        onClick={() => document.getElementById('hidden-input').click()}>
                        Upload imgage
                    </button>
                    <input onChange={handleFileChange} className='hidden' type="file" name="" id="hidden-input" placeholder='image' />
                </div>
                <input defaultValue={adminEdit?.description} required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" placeholder='description' name="description" id="" />
                <div className='w-[100%] justify-between gap-[20px] h-[60px] flex items-center'>
                    <input required defaultValue={adminEdit?.price} className='w-[90%] shadow-xl outline-none rounded-xl h-[50px] pr-[30px] pl-[10px] text-[24px]' type="number" placeholder='price' name="price" id="" />
                    <select required name="" onChange={(e) => selectedValue(e.target.value)} className='appearance-none w-[10%] h-[50px] shadow-xl outline-none text-[20px] pl-[10px] rounded-xl flex items-center justify-center' id="" value={selectedValue}>
                        <option className='' value="dollars">USDT</option>
                        <option className='' value="sum">UZD</option>
                        <option className='' value="rubles">RUB</option>
                        <option className='' value="tenge">TNG</option>
                    </select>
                </div>
                <input defaultValue={adminEdit?.size} required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" placeholder='size' name="size" id="" />
                <button type="submit" className='text-[24px] w-[100%] hover:border-solid hover:border-[#1d721d] hover:border-[3px] transition-all duration-100 font-[500] rounded-xl hover:bg-[white] hover:text-[#1d721d] text-[white] h-[60px] bg-[#1d721d]'>
                    Add product
                </button>
            </div>
        </form>
    )
}

export default AdminEdit