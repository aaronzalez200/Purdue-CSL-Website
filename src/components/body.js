import React from "react";
import Logo from '../images/PULogo.png'
import Logo2 from '../images/PurdueLogo.png'

export default function Body() {

    return (
    <div className="Body">
        <h1>Purdue Dota 2 Club</h1>
        <div className="Summary">
            <img src={Logo2} height="400px" />
        </div>
    </div>
    )
}