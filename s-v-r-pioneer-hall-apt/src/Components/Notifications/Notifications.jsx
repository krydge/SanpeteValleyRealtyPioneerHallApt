import { useState } from 'react';
import data from './NotificationData.json';

function Notifications() {

    const [notifications, setNotifications] = useState(data)
    const [index, setIndex] = useState(0);
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
        <div className="Notifications" key={notifications[index].alt}>
            <div className="NotificationsContent" style={{backgroundimage : notifications[index].imagePath}}>
                
                <h2>{notifications[index].name}</h2>
                <p>{notifications[index].content}</p>
            </div>
            <div className='leftRightButtons'>
                <button name="left" onClick={handleCLick}>{"<<<"}</button>
                <button name="right" onClick={handleCLick}>{">>>"}</button>
            </div>
        </div>
    )
}

export default Notifications;