import { useState } from 'react';
import data from './NotificationData.json';
import './NotificationsStyle.css'

function Notifications() {

    const [notifications, setNotifications] = useState(data)
    const [index, setIndex] = useState(0);
    const [closed, setClosed] = useState(false);
    const handleCLick = (e) => {
        if (e.name === "left") {
            if (index === 0) {
                setIndex(notifications.length - 1)
            }
            else {
                setIndex(index - 1)
            }
        } else {
            if (index === (notifications.length - 1)) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }
            console.log(index)
        }
    }
    return (
        <>
            {!closed &&
                <div className="Notifications" key={notifications[index].alt}>
                    <div className="NotificationsContent" >
                        <h2>{notifications[index].name}</h2>
                        <p>{notifications[index].content}</p>
                    </div>
                    <div><button onClick={() => setClosed(true)} id="CloseButton">X</button></div>
                    <div className='leftRightButtons'>
                        <button name="left" onClick={handleCLick}>{"<<<"}</button>
                        <button name="right" onClick={handleCLick}>{">>>"}</button>
                    </div>
                </div>
            }
            {closed &&
                <div className='OpenButton'><button onClick={() => setClosed(false)} id="OpenButton">V</button></div>
            }
        </>

    )
}

export default Notifications;