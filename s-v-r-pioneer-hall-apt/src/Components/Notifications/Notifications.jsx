import ApplyNow from '../ApplyNow/ApplyNow';
import './NoteStyle.css'

function Notifications() {
    return (
        <div >
            <div className="NotesContainer" >
                <h1>Welcome to Pioneer Hall Apartments, one of the most affordable student housing options in Ephraim, UT. We offer our residents the comfort of a spacious living space while still located just one block from Snow College campus! Kick back with friends in our student lounge and watch the game or invite your friends over for a game night. If you need a nice large area to have a group over to study, we got you covered. You can  play a quick game of ping pong or show off with your skills on our billiards table. Take your friends outside to throw some bags around in a game of corn-hole while you grill up some Hamburgers. Plenty of ways to make memories.  So don’t hesitate and apply now to live at Pioneer Hall apartments!</h1>
                <ApplyNow className="ApplyButton"></ApplyNow>
            </div>
        </div>
    )
}


export default Notifications;