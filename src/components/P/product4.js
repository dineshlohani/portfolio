import React from "react";
import "./product.css"
import Graphic from "../../img/network.jpg";
const product = () => {
    return (

        <div className="p">
            <div className="p-br">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <b> Network Administrator</b>
            </div>

            < img src={Graphic} alt='' className="v-img" />


        </div>

    )
}
export default product