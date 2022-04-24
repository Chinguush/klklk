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
            {children}
            <Navbar></Navbar>
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
                            </div>
                        </div>
                        <div className="neg2">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout;