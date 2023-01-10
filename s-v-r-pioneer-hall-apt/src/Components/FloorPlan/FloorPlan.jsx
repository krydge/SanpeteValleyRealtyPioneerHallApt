import { useState } from "react";
import ApplyNow from "../ApplyNow/ApplyNow";

import floorplandata from './FloorPlanContent.json';
import './FloorPlanStyle.css'

function FloorPlan() {
    const [floorPlan, setFloorPlan] = useState(floorplandata[0])
    const handleClick = () => {
        if (floorPlan.Title === "Shared Floor Plan") {
            setFloorPlan(floorplandata[1])
        } else {
            setFloorPlan(floorplandata[0])
        }
    };
    return (
        <div className="FloorContainer">
            <div className="floorPlanContainer">
                <img src={floorPlan.src} alt={floorPlan.alt}></img>
                <button onClick={handleClick} className="buttonLeft"><span>{"<"}</span></button>
                <button onClick={handleClick} className="buttonRight"><span>{">"}</span></button>
            </div>
            <div >
                <h1>{floorPlan.Title}</h1>
                <h2>{floorPlan.unit}{floorPlan.price}</h2>
                <h2>{floorPlan.semesterUnit}{floorPlan.semesterPrice}</h2>
                <h2>{floorPlan.Description}</h2>

                <ApplyNow></ApplyNow>
            </div>
        </div>
    )
}

export default FloorPlan;