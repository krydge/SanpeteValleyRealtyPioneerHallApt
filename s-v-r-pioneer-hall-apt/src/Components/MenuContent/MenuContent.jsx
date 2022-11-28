import data from './MenuContentData.json';
import './style.css';
function MenuContent() {
    return (<div id="MenuContent">
        <ul id="MenuContentul">
            {data && data.map(item => (<a href={item.link} key={String(item.name)}>{item.name}</a>))}
        </ul>
    </div>)
}

export default MenuContent;