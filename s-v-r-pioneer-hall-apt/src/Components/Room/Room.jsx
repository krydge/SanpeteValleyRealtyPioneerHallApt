

import { useState } from "react";
import data from './Rooms.json'
import './Rooms.css'

function Room() {
    const [imageInfo, setImageInfo] = useState(data);
    const [ZoomImage, setZoomImage] = useState(false);
    const [index, setIndex] = useState(0);
    const [enlargeImage, setEnlarge]=useState(false);

    const handleClick = (e) => {
        if (e.target.name === "left") {
            if (index === 0) {
                setIndex(imageInfo.length - 1);
            }
            else {
                setIndex(index - 1)
            }
        }
        if (e.target.name === "right") {
            if (index === imageInfo.length - 1) {
                setIndex(0);
            }
            else {
                setIndex(index + 1)
            }
        }
    }
    const Zoom = (e) => {
        if (ZoomImage) {
            setZoomImage(false)
        }
        else {
            setZoomImage(true)
        }
    }
    function enlarge(e){


    }
    return (<div style={{ paddingLeft: 'auto' }}>
        
        <div className="Gallery">
            {data&&data.map(item=>(
            <div key={item.key+item.src}>
                <img className="GalleryImg" src={process.env.PUBLIC_URL + item.src} onClick={enlarge}></img>
                </div>
            ))}
        </div>
    </div>)
}

export default Room;