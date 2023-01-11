import { Link } from "react-router-dom";
import'../styles/usernavbar.css';
const UserNavbar = () => {
    return ( 
        <div className="adminNav">
            <div className="main1">
            <div className="portal">
                <img src="../images/logo2.jpg" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/user/" className="nav-link-mx3">Dash Board</Link></li>
                    
                   
                   <li><Link Link to ="/user/book-list" className="nav-link-mx3">Book List</Link></li>
                   
                   
                   <li><Link Link to ="/" className="nav-link-mx3">Logout</Link></li>
                </ul>

            </div>
            </div>
        </div>
     
     );
}
 
export default UserNavbar;