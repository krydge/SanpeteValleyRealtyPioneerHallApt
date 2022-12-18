import data from './MenuContentData.json';
import links from './MenuLinks.json';
import './style.css';
function MenuContent(params) {


    return (<div id="MenuContent">
        <ul id="MenuContentul">
            {data && data.map(item => (<button  key={String(item.name)} onClick={()=>(params.parentCallBack(item.link))}>{item.name}</button>))}
            {links && links.map(item => (<a  href={item.link} key={String(item.name)} onClick={()=>(params.parentCallBack(item.link))}>{item.name}</a>))}
        </ul>
    </div>)
}

export default MenuContent;