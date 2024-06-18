import React, { useContext } from 'react'
import HomeBanner from '../homeBanner/HomeBanner'
import About from '../about/About'
import { Context } from '../../../App'
import Contact from '../contact/Contact'

function Layout() {
    const { scroll1Ref, scroll2Ref, scroll3Ref } = useContext(Context)
    return (
        <div>

            <div ref={scroll1Ref}>
                <HomeBanner />
            </div>
            <div ref={scroll2Ref}>
                <About />
            </div>
            {/* <div ref={scroll3Ref}>
                <Contact />
            </div> */}
        </div>
    )
}

export default Layout