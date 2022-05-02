import React from "react"
import Navbar from "./navbar"
import { useRouter } from "next/router";

const Layout = ({children}) => {
    const router = useRouter()
    const isActive = (r) => {
        if(r === router.pathname)
           return " hide"
        else 
            return ""
    }
    return (
        <div className="container">
            <div className={("alga" + isActive('/login') || ("alga" + isActive('/create_acc')))}>
                <div className="header">
                    <div className="header1">                        
                    </div>
                <div className="logocont">
                    <div className="logo">
                    </div>
                </div>
                </div>
                <div className="negcont">
                    <div className={("neg" + isActive('/settings'))}>
                        <div className="neg1">
                            <div className="neg11">
                                ₮ 3'500'000
                            </div>
                            <div className="neg12">
                                Нийт мөнгөн дүн
                            </div>
                        </div>
                        <div className="neg2">
                            <div className="neg21">
                            </div>
                        </div>
                    </div>
                </div>
            {children}
            <Navbar></Navbar>
            </div>
        </div>
    )
}

export default Layout;