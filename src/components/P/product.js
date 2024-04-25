import React from "react";
import "./product.css"
import Graphic from "../../img/graphic.jpg";
const product = () => {
    return (

        <div className="p">
            <div className="p-br">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div><b>Graphic Design</b>
            </div>

            < img src={Graphic} alt='' className="v-img"  />


        </div>

    )
}
export default product