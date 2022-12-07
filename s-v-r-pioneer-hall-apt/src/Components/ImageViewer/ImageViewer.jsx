import { useState } from "react";

const data = [{
    "Title": "Pedro the dog",
    "Description": "Pedro is a beautiful beagle", "src": "/Assets/Beagle.png", "Alt": "A beagle"
  }, {
    "Title": "Alex the Cat",
    "Description": "Alex is a beautiful Persian", "src": "/Assets/Persian.png", "Alt": "A Persian"
  }]
  


function ImageViwer() {
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
    return (<div>
        {!ZoomImage &&
            <div className="ImageViewer">
                <div>
                    <img src={process.env.PUBLIC_URL + imageInfo[index].src} alt={imageInfo[index].Alt} onClick={Zoom}></img>
                    <div>
                        <h2>{imageInfo[index].Title}</h2>
                        <h3>{imageInfo[index].Description}</h3>
                    </div>
                </div>
                <button name="left" onClick={handleClick}>{"<<<"}</button>
                <button name="right" onClick={handleClick}>{">>>"}</button>
            </div>
        }
        {ZoomImage && <div className="Zoomed">
            <img src={process.env.PUBLIC_URL + imageInfo[index].src} alt={imageInfo[index].Alt} onClick={Zoom}></img>
            </div>}
    </div>)
}

export default ImageViwer;