import React from "react";
import Service from "../Service";
import Footer from "./footer";
import {useContext} from "react"
import {ctxTotal} from "../Ctx";


let  AddRemove = ()=> {

    // constructor(props) {
    //     super(props);
    let menu =  Service();
    
    let [total, setTotal] = useContext(ctxTotal);
    console.log(total);    
   let  addPizza = (type, size, e) =>{
        menu.addPizza(type, size);
        setTotal(menu.getGrandTotal());
       
    };

    let removePizza = (type, size, e)=> {
        menu.removePizza(type, size, e);
        setTotal(menu.getGrandTotal());
        
    }
    let CardsDisplay= () =>{
        return menu.all_pizza().map(el => <div className="card">
            <p className="card-typo">{el.type}</p>
            <img className="card-image" src={"./"+el.img} alt="" />
            <div className="inner-card">


                <div className="widget-display"key={el.small.nameAndSize()}>
                <div className="textContainer">Small&nbsp;&nbsp;  @ R{el.small.price} *  {el.small.total().toFixed(2)}</div>&nbsp;&nbsp;&nbsp;<div className="buttonContainer"> <input onClick={e => removePizza(el.type, "small", e)} type={"button"} className="arithmetical-btn-subtract" value={"-"} /><input onClick={e => addPizza(el.type, "small", e)} type={"button"} className="arithmetical-btn-add" value={"+"} /></div>
                </div>
                <div className="widget-display" key={el.medium.nameAndSize()}>
                <div className="textContainer">Medium&nbsp;@ R{el.medium.price} *  {el.medium.total().toFixed(2)}</div>&nbsp; <div className="buttonContainer"><input onClick={e => removePizza(el.type, "medium", e)} type={"button"} className="arithmetical-btn-subtract" value={"-"} /><input onClick={e => addPizza(el.type, "medium", e)} type={"button"} className="arithmetical-btn-add" value={"+"} /></div> 
                </div>

                <div className="widget-display" key={el.large.nameAndSize()}>
                 <div className="textContainer">Large&nbsp;@ R{el.large.price} * {el.large.total().toFixed(2)}</div>   &nbsp; <div className="buttonContainer"><input onClick={e => removePizza(el.type, "large", e)} type={"button"} className="arithmetical-btn-subtract" value={"-"} /><input onClick={e => addPizza(el.type, "large", e)} type={"button"} className="arithmetical-btn-add" value={"+"} /></div>
                </div>
            </div>
        </div>
        )
    }

    let GrandTot = ()=> {
        return <div className="total-display"><h1>Grand Total :R{total}</h1></div>
    }

    

        return (<>
            <GrandTot />
            <CardsDisplay />
            <Footer total={total} order={menu.customerOrder()} />
            
            </>
)
    
}

export default AddRemove;
