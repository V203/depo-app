import React from "react";
import Nav from "../components/nav";
import Service from "../Service";
import Total from "../components/Total";
import { useContext } from "react"
import { ctxTotal } from "../Ctx";
import Footer from "../components/footer";


let Locator = () => {
    let menu = Service()
    let [total] = useContext(ctxTotal)

    return (<>
        <Nav />
        <Total />
        <Footer total={total} order={menu.customerOrder()}/>

    </>
    )
}

export default Locator;