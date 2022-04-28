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
                <div className={"hoyrcont"  + isActive('/settings')}>
                    <div className="hoyr">
                        <div className="hoyr1">
                            <i className="fa-solid fa-wallet"></i>
                        </div>
                        <div className="hoyr2">
                            <div class="hoyr2zasvar">
                                <div className="hoyr21">
                                    Нэмэлт мэдээлэл
                                </div>
                                <div className="hoyr22">
                                    ₮ 20 000
                                </div>
                                <div className="hoyr23">
                                    Хэтэвч
                                </div>
                            </div>
                        </div>
                        <div className="hoyr3">
                            <button className="hoyr31">
                                +
                            </button>  
                        </div>
                    </div>
                </div>
                <div className={"guravcont"  + isActive('/settings')}>
                    <div className="gurav">
                        <div className="gurav1">
                            <i class="fa-solid fa-credit-card"></i>
                        </div>
                        <div className="gurav2">
                            <div class="gurav2zasvar">
                                <div className="gurav21">
                                    Нэмэлт мэдээлэл
                                </div>
                            <div className="gurav22">
                                ₮ 20 000
                            </div>
                            <div className="gurav23">
                                Карт
                            </div>
                            </div>
                        </div>
                        <div className="gurav3">
                            <button className="gurav31">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"dorovcont" + isActive('/settings')}>
                    <div className="dorov">
                        <div className="dorov1">
                            <i class="fa-solid fa-coins"></i>
                        </div>
                        <div className="dorov2">
                            <div class="dorov2zasvar">
                                <div className="dorov21">
                                    Нэмэлт мэдээлэл
                                </div>
                                <div className="dorov22">
                                    ₮ 20 000
                                </div>
                                <div className="dorov23">
                                    Хадгаламж
                                </div>
                            </div>
                        </div>
                        <div className="dorov3">
                            <button className="dorov31">
                                +
                            </button>
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