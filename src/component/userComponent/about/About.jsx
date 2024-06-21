import React from 'react'
import aboutShina from '../../../assets/aboutShina.png'
function About() {
    return (
        <div className='flex flex-col mt-[70px] mb-[40px] justify-center items-center'>
            <h1 className='text-[52px] text-center mb-[30px]'>Узнайте все информацию о нас</h1>
            <div className='flex items-center lg:items-start justify-around flex-col lg:flex-row'>
                <p className='text-[20px] text-center lg:text-start text-[gray]'>
                    Магазин NUMO INFIMAX предлагает высококачественные грузовые шины и шины
                    для сельскохозяйственной техники для различных видов коммерческого транспорта,
                    включая грузовики, автобусы, прицепы и сельскохозяйственные машины. Мы сотрудничаем
                    с ведущими мировыми производителями, гарантируя нашим клиентам надежные и долговечные шины,
                    которые повышают безопасность и эффективность транспортных средств. В нашем ассортименте
                    только проверенные бренды, а квалифицированные специалисты помогут подобрать
                    оптимальные решения под любые требования. Мы предлагаем гибкую систему скидок
                    для постоянных клиентов и оптовых покупателей, обеспечивая простой
                    процесс заказа и быструю доставку.
                    NUMO INFIMAX — ваш надежный партнер в мире грузовых и сельскохозяйственных шин.
                </p>
                <img src={aboutShina} alt="" />
            </div>
        </div>
    )
}

export default About