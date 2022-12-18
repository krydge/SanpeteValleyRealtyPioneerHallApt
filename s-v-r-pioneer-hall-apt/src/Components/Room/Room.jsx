

import { useState } from "react";
import data from './Rooms.json'

const style = {
    display: 'flex',
    flexDirection:'row',
    padding: '2vh',
    alignItems: 'flex-end',
    width: '70vw',
    margin: 'auto',
    "@media (maxWidth: 600px)": {
        padding: '2vh',
        width: '50vw',
        margin: "auto",

    }

};
function Room() {
    const [imageInfo, setImageInfo] = useState(data);
    const [ZoomImage, setZoomImage] = useState(false);
    const [index, setIndex] = useState(0);

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
    return (<div style={{ paddingLeft: 'auto' }}>
        {!ZoomImage &&
            <div className="ImageViewer" style={style}>
                <div >
                    <img src={process.env.PUBLIC_URL + imageInfo[index].src} alt={imageInfo[index].Alt} onClick={Zoom} style={{ width: '30vw', cursor: "zoom-in", boxShadow: '0 1px 50px 0 rgba(0, 0, 0, 0.2), 0 15px 50px 0 rgba(0, 0, 0, 0.19)', borderRadius: '1%', marginBottom: '1vh' }}></img>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button name="left" onClick={handleClick} >{"<<<"}</button>
                        <button name="right" onClick={handleClick}>{">>>"}</button>
                    </div>
                </div>
                <div style={{ marginLeft: '3vw' }}>
                    <h2>{imageInfo[index].Title}</h2>
                    {/* <h2 className='RentalType'>{imageInfo[index].rentalType}</h2> */}
                    <h3 className='Price'>{imageInfo[index].price} {imageInfo[index].unit} {imageInfo[index].timeSpan}</h3>
                    <p>{imageInfo[index].Description}</p>
                </div>
            </div>
        }
        {ZoomImage && <div className="Zoomed">
            <img src={process.env.PUBLIC_URL + imageInfo[index].src} alt={imageInfo[index].Alt} onClick={Zoom} style={{ width: '80vw', cursor: "zoom-out" , boxShadow: '0 1px 50px 0 rgba(0, 0, 0, 0.2), 0 15px 50px 0 rgba(0, 0, 0, 0.19)', borderRadius: '1%', marginBottom: '1vh' }}></img>
        </div>}
    </div>)
}

export default Room;