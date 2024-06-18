import React from 'react'
import AdminProducts from './adminSidebar/AdminProducts'
import AdminTable from './adminSidebar/adminTable/AdminTable'


function Admin() {
    return (
        <div className='flex flex-col items-start w-[100%] gap-[40px]'>
            {/* <AdminSidebar /> */}
            <AdminProducts />
            <AdminTable />
        </div>
    )
}

export default Admin