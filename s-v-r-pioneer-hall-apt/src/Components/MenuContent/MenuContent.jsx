import data from './MenuContentData.json';
function MenuContent() {
    return (<div>
        <ul>
            {data && data.map(item => (<a href={item.link} key={String(item.name)}>{item.name}</a>))}
        </ul>
    </div>)
}

export default MenuContent;