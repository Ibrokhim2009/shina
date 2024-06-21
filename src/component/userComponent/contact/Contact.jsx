import React from 'react'
import contactImg from '../../../assets/contactImg.png'
function Contact() {
    return (
        <div className='mt-[40px]'>
            <h1 className='text-[52px] mb-[20px] text-center'>Оставить заявку</h1>
            <form action="" className='flex p-[20px] items-center lg:items-start lg:flex-row flex-col  justify-between'>
                <div className='border-[4px] border-[#306675] rounded-xl'>
                    <img src={contactImg} alt="" />
                </div>
                <div className='lg:w-[50%] w-[100%] m-[20px] lg:mt-[0px] flex items-center flex-col gap-[10px]'>
                    <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[60px] pl-[10px] text-[24px]' type="text" placeholder='name' name="" id="" />
                    <input required className='w-[100%] shadow-xl outline-none rounded-xl h-[60px] pl-[10px] text-[24px]' type="tel" placeholder='phone number' name="" id="" />
                    <textarea required className='w-[100%] max-h-[180px] pt-[10px] min-h-[60px] shadow-xl outline-none rounded-xl h-[170px] pl-[20px] text-[24px]' type="text" placeholder='comment' name="" id="" />
                    <button className='text-[24px] w-[100%] hover:border-solid hover:border-[#1d721d] hover:border-[3px] transition-all duration-100 font-[500] rounded-xl hover:bg-[white] hover:text-[#1d721d] text-[white] h-[60px] bg-[#1d721d]'>
                        Contact
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact