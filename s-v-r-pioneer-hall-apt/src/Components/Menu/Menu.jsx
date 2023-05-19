import MenuContent from "../MenuContent/MenuContent";
import './MenuStyle.css';
import logo from '../../assets/PIONEER-Logo-white-copy.png'
function Menu(params){
    return (<div id="Menu" >
        <img onClick={()=>params.parentCallBack('/')}src={logo} alt="Pioneer Hall Apartments Logo" id="MenuImage" ></img>
        <MenuContent parentCallBack={params.parentCallBack}></MenuContent>
    </div>)
}

export default Menu;