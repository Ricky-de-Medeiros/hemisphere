import React from "react";
import northerpic from "./images/NH.gif"
import southerpic from "./images/SH.png"
import './Hemisphere.css';

const hemisphereConfig = {
    Northern: {
        text: "Northern Hemisphere",
        pic: northerpic
    },
    Southern: {
        text: "Southern Hemisphere",
        pic: southerpic
    }

}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
    const hemispherePic = latitude > 0 ? northerpic : southerpic;
    return (
        <div className={hemisphere} >
            <div className='ui raised text container segment' >
            <img src={hemispherePic} alt={hemisphere}/>
            </div>
            <div className='ui teal bottom attached label'>
            <h1>{hemisphere}</h1>
            </div>
        </div>
    )
}

export default HemisphereDisplay;