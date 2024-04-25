import React from "react";
import "./product.css"
import Graphic from "../../img/developer.jpg";
const product = () => {
    return (

        <div className="p">
            <div className="p-br">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <b>Web / Software-developer</b>
            </div>

            < img src={Graphic} alt='' className="v-img" />


        </div>

    )
}
export default product