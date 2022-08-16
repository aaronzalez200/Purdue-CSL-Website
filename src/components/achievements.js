import React from "react";
import Trophy from '../images/Trophy.png'

export default function Achievements() {

    return (
    <div className="achievements">
        <h1>Achievements</h1>
        <div className="ranking-info">
            <br></br>
            <h4>KSU Spring Tournament 2020 </h4>
            <img src={Trophy} />
            <p>1st Place</p>
            <br></br>
            <h4>Roster</h4>
            <div className="roster">
                <p>1. Miharu</p>
                <p>2. Ly</p>
                <p>3. TreeHard</p>
                <p>4. Vix</p>
                <p>5. Laconic</p>
            </div>
            <br></br>
            <h4>CSL Spring 2022</h4>
            <img src={Trophy} />
            <p>1st Place</p>
            <br></br>
            <h4>Roster</h4>
            <div className="roster">
                <p>1. Jey</p>
                <p>2. TreeHard</p>
                <p>3. Vix</p>
                <p>4. Charles</p>
                <p>5. Laconic</p>
            </div>
            <br></br>
            <br></br>
        </div>
        
    </div>
    )
}