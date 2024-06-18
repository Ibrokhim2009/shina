import React from 'react'
import aboutShina from '../../../assets/aboutShina.png'
function About() {
    return (
        <div className='flex flex-col mt-[70px] mb-[40px] justify-center items-center'>
            <h1 className='text-[52px] mb-[30px]'>Узнайте все информацию о нас</h1>
            <div className='flex items-center lg:items-start justify-around flex-col lg:flex-row'>
                <p className='text-[20px] text-center lg:text-start text-[gray]'>
                    Мы объединяем исследования и разработки шинных технологий,
                    переработку и продажу, а также глобальную торговлю и логистику. Наши собственные марки
                    шин SPORTRAK & SUPERWAY сертифицированы по стандартам ISO9000, TS16949, американским DOT
                    и SMARTWAY, европейским E-Mark, бразильским INMETRO, Gulf GCC и Индонезии SNI и т. д. Благодаря
                    высокому качеству, быстрой доставке и чрезвычайно конкурентоспособным ценам наши шины стабильно
                    распространяется более чем в 100 странах и регионах, включая Ближний Восток, Африку, Юго-Восточную Азию,
                    Центральную Азию, Америку и т. д. Аффилированная компания Sportrak Tire Co., Ltd., Qingdao Sinorubber
                    International corp. была основана в 2020 году, ее основным видом деятельности является экспорт шин, колес
                    и сопутствующих аксессуаров. Благодаря неустанным усилиям компания теперь имеет таможенный склад площадью
                    29 076 квадратных метров и свободный склад площадью 15 016 квадратных метров,
                    на которых может храниться более 100 000 цельнометаллических шин и 60 000 полустальных шин
                </p>
                <img src={aboutShina} alt="" />
            </div>
        </div>
    )
}

export default About