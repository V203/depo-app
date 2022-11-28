import Nav from "../components/nav";
import Footer from "../components/footer";
import React from "react";
import Service from "../Service";
import Total from "../components/Total";
import {useContext} from "react"
import {ctxTotal} from "../Ctx";


let Contact = () => {
let menu =  Service()
let [total] = useContext(ctxTotal)
    
        return (<>
                <Nav />
                <Total />
                <Footer total={total} order={menu.customerOrder()} />
                </>
            )
    
    
}

export default Contact