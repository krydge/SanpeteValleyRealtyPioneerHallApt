import MenuContent from "../MenuContent/MenuContent";
import './MenuStyle.css';
function Menu(params){
    return (<div id="Menu" >
        <img onClick={()=>params.parentCallBack('/')}src={'https://pioneerhallapt.com/wp-content/uploads/2020/02/PIONEER-Logo-white-copy.png'} alt="Pioneer Hall Aprtments Logo" id="MenuImage" ></img>
        <MenuContent parentCallBack={params.parentCallBack}></MenuContent>
    </div>)
}

export default Menu;