import React from "react"
import Navbar from "./navbar"

const Layout = ({children}) => {
    return (
        <div>
            {children}
            <Navbar></Navbar>
        </div>
    )
}

export default Layout;