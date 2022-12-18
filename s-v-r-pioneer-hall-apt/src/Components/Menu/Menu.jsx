import MenuContent from "../MenuContent/MenuContent";
import Logo from './TempPioneerHallLogo.png';
import './MenuStyle.css';
function Menu(){
    return (<div id="Menu" >
        <a href = "/"><img src={'https://pioneerhallapt.com/wp-content/uploads/2020/02/PIONEER-Logo-white-copy.png'} alt="Pioneer Hall Aprtments Logo" id="MenuImage" ></img></a>
        <MenuContent></MenuContent>
    </div>)
}

export default Menu;