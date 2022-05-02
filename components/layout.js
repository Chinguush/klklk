import React from "react"
import Navbar from "./navbar"
import { useRouter } from "next/router";

const Layout = ({children}) => {
    const router = useRouter()
    const list = '.list';
    const isActive = (r) => {
        if(r === router.pathname)
           return " hide"
        else 
            return ""
    }
    return (
        <div className="container">
            <div>
                <div className="header">
                    <div className="header1">                        
                    </div>
                <div className={"logocont" + isActive('/settings')}>
                    <div className="logo">
                    </div>
                </div>
                </div>
                <div className={"negcont" + isActive('/settings')}>
                    <div className="neg">
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
            </div>
            {children}
            <Navbar></Navbar>
        </div>
    )
}

export default Layout;