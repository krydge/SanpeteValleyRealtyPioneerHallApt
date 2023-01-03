
import './GalleryButtonStyle.css'
function GalleryButton(params) {
    return (<div className='GalleryButtonContainer'>
        <h1>View Our Beautiful Rooms</h1>
        <a className="GalleryButton" onClick={()=>(params.parentCallBack("/gallery"))}>Gallery</a>
    </div>);
}

export default GalleryButton