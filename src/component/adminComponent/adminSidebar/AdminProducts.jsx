import React, { useContext, useState } from 'react'
import { Context } from '../../../App'
import { prodUrl } from '../../../../Urls'
import axios from 'axios'
// import adminImage from '../../assets/adminImage.png'
function AdminProducts() {
    const { product, setProduct } = useContext(Context)
    const [selectedValue, setSelectedValue] = useState('');
    const [fileData, setFileData] = useState(null);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [files, setFiles] = useState({});
    // const [files2, setFiles2] = useState([]);
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
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const productHandler = e => {
        e.preventDefault()
        setFiles({})
        console.log(files.slice(5).toString())
        const forma = new FormData(e.target)
        const { title, brand, image, description, price, size, } = Object.fromEntries(forma.entries())
        const addProduct = {
            title,
            brand,
            description,
            image: files,
            price,
            size,
            currence: selectedValue ? selectedValue : 'UZDT'
        }
        try {
            axios.post(prodUrl, addProduct)
                .then(res => {
                    setProduct([product, ...addProduct])
                    console.log([product, ...addProduct])
                })
            alert('Product qoshildi')
            window.location.reload()
        }
        catch (err) {
            console.log(err);
        }

    }
    // console.log(files)
    return (
        <>
            <form onSubmit={productHandler} className='w-[100%] border-[3px]  rounded-[16px] h-[100%] flex-col gap-[10px] flex px-[20px] pb-[20px] pt-[30px]'>
                <h1 className='text-black text-[40px]'>Add product</h1>
                <div className='flex items-center flex-col gap-[14px]'>
                    <div className='w-[100%] flex gap-[20px]'>
                        <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" name="title" id="" placeholder='title' />
                        <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" name="brand" id="" placeholder='brand' />
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
                    <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" placeholder='description' name="description" id="" />
                    <div className='w-[100%] justify-between gap-[20px] h-[60px] flex items-center'>
                        <input required className='w-[90%] shadow-xl outline-none rounded-xl h-[50px] pr-[30px] pl-[10px] text-[24px]' type="number" placeholder='price' name="price" id="" />
                        <select required name="" className='appearance-none w-[10%] h-[50px] shadow-xl outline-none text-[20px] pl-[10px] rounded-xl flex items-center justify-center' id="" value={selectedValue} onChange={handleSelectChange}>
                            <option className='' value="dollars">USDT</option>
                            <option className='' value="sum">UZD</option>
                            <option className='' value="rubles">RUB</option>
                            <option className='' value="tenge">TNG</option>
                        </select>
                    </div>
                    <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[50px] pl-[10px] text-[24px]' type="text" placeholder='size' name="size" id="" />
                    <button type="submit" className='text-[24px] w-[100%] hover:border-solid hover:border-[#1d721d] hover:border-[3px] transition-all duration-100 font-[500] rounded-xl hover:bg-[white] hover:text-[#1d721d] text-[white] h-[60px] bg-[#1d721d]'>
                        Add product
                    </button>
                </div>
            </form>
        </>
    )
}

export default AdminProducts