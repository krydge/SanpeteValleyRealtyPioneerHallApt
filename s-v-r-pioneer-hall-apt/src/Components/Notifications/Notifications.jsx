import ApplyNow from '../ApplyNow/ApplyNow';
import './NoteStyle.css'

function Notifications() {
    return (
        <div >
            <div className="NotesContainer" >
                <h1>Only 15 Units left for Spring 2023!</h1>
                <ApplyNow className="ApplyButton"></ApplyNow>
            </div>
        </div>
    )
}


export default Notifications;