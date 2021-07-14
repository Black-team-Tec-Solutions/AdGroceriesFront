import {Link} from 'react-router-dom'; 


const SubMenu = ({countries = [0,1,2,3]}) => (
    <ul className="list-group" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <li className="list-group-item list-group-item-action">submenu 1</li>
        <li className="list-group-item list-group-item-action">submenu 2</li>
        <li className="list-group-item list-group-item-action">submenu 3</li>
    </ul>
)

export default SubMenu;