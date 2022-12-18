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
        <div className="Notifications" key={notifications[index].alt}
            style={{ float: 'center', backgroundImage: 'url(https://pioneerhallapt.com/wp-content/uploads/2020/02/ph.jpg)', height: '50vh' }}>
            <div className="NotificationsContent" style={{ maxWidth: '35vw' }}>
                <h1>{notifications[index].name}</h1>
                <h2>{notifications[index].content}</h2>
            </div>
        </div>
    )
}

export default Notifications;