import { useState, useEffect } from 'react';
import data from './NotificationData.json';
import './NotificationsStyle.css'

function Notifications() {

    const [notifications, setNotifications] = useState(data)
    const [index, setIndex] = useState(0);
    const [closed, setClosed] = useState(false);
    const MINUTE_MS = 10000;
    useEffect(() => {
        const interval = setInterval(() => {
            nextNote();
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    function nextNote() {
        if (index === (notifications.length - 1)) {
            setIndex(0)
        }
        else {
            setIndex(index + 1)
        }
    }

    return (
        <div>
            <div className="Notifications" key={notifications[index].alt} style={{ float: 'center', height: '50vh', backgroundImage:`url(${process.env.PUBLIC_URL}"/Assets/banner.png")`}}>
                <div className="NotificationsContent" >
                    <h1>{notifications[index].name}</h1>
                    <h2>{notifications[index].content}</h2>
                </div>
            </div>
        </div>
    )
}

export default Notifications;