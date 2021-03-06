import React from "react"
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
    const router = useRouter()
    const isActive = (r) => {
        if(r === router.pathname)
            return " active"
        else 
            return ""
    } 
    return (
        <div className="navigation">
            <ul>
                <li className={"list" + isActive('/home')}>
                    <a href="/home">
                        <span className="icon">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + isActive('/chart')}>
                    <a href="/chart">
                        <span className="icon">
                            <i class="fa-solid fa-chart-line"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + isActive('/group')}>
                    <a href="/group">
                        <span className="icon">
                            <i class="fa-solid fa-users"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + isActive('/settings')}>
                    <a href="/settings">
                        <span className="icon">
                            <i class="fa-solid fa-gear"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
            </ul>
        </div> 
    )
}

export default Navbar;
