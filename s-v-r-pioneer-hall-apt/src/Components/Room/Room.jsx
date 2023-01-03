
import data from './Rooms.json'
import './Rooms.css'

function Room() {
    return (<div style={{ paddingLeft: 'auto' }}>
        
        <div className="Gallery">
            {data&&data.map(item=>(
            <div key={item.key+item.src}>
                <img className="GalleryImg" src={process.env.PUBLIC_URL + item.src} alt="item.alt"></img>
                </div>
            ))}
        </div>
    </div>)
}

export default Room;