import ApplyNow from '../ApplyNow/ApplyNow';
import './NoteStyle.css'

function Notifications() {
    return (
        <div >
            <div className="NotesContainer" >
                <h1>Welcome to Pioneer Hall Apartments, one of the most affordable student housing options in Ephraim, UT. We offer our residents the comfort of a spacious living space while still located just one block from Snow College campus!  Kick back with friends in our student lounge or play a quick game on our billiards table.  So don’t hesitate and apply now to live at Pioneer Hall apartments!</h1>
                <ApplyNow className="ApplyButton"></ApplyNow>
            </div>
        </div>
    )
}


export default Notifications;