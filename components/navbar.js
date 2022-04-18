import React from "react";
import { useState } from 'react'


const NavBar = () => {
    var [active, setActive] = useState('home')
    var classActive = 'active'
    // const list = document.querySelectorAll('.list');
    // function activeLink() {
    //     list.forEach((item) => 
    //     item.classList.remove('active'));
    //     this.classList.add('active')
    // }
    // list.forEach((item) => 
    // item.addEventListener('click', activeLink));
      
    return (
        <div className="navigation">
            <ul>
                <li className={"list" + active === "home" ? " active": ""}>
                    <a href="#" onClick={() => setActive('home')}>
                        <span className="icon">
                            <i class="fa-solid fa-house"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + active === "chart" ? "active": ""}>
                    <a href="#" onClick={() => setActive('chart')}>
                        <span className="icon">
                            <i class="fa-solid fa-chart-line"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + active === "group" ? "active": ""}>
                    <a href="#" onClick={() => setActive('group')}>
                        <span className="icon">
                            <i class="fa-solid fa-users"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <li className={"list" + active === "settings" ? "active": ""}>
                    <a href="#" onClick={() => setActive('settings')}>
                        <span className="icon">
                            <i class="fa-solid fa-gear"></i>
                        </span>
                        <span className="ball"></span>
                    </a>
                </li>
                <div className="indicator"></div>
            </ul>
        </div> 
    )
}

export default NavBar