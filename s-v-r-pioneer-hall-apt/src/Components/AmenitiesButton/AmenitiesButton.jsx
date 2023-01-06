
import './AmenitiesButtonStyle.css'
function AmenitiesButton(params) {
    return (<div className='AmenitiesButtonContainer'>
        <h1>See our wonderful Amenities</h1>
        <a className="AmenitiesButton" onClick={()=>(params.parentCallBack("/amenities"))}>Amenities</a>
    </div>);
}

export default AmenitiesButton