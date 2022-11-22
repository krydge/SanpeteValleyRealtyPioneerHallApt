import MenuContent from "../MenuContent/MenuContent";
import Logo from '../../logo.svg'
function Menu(){
    return (<div>
        <a href = "/"><img src={Logo} alt="Pioneer Hall Aprtments Logo" ></img></a>
        <MenuContent></MenuContent>
    </div>)
}

export default Menu;