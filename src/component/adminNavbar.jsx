import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNav">
            <div className="main1">
            <div className="portal">
                <img src="../images/logo2.jpg" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li><Link to="/admin/" className="nav-link-mx3">Dash Board</Link></li>
                    <li><Link Link to ="/admin/add-book" className="nav-link-mx3">Add Book</Link></li>
                   <li><Link Link to ="/admin/add-user" className="nav-link-mx3">Add User</Link></li>
                   <li><Link Link to ="/admin/book-list" className="nav-link-mx3">Book List</Link></li>
                   
                   <li><Link Link to ="/admin/user-list" className="nav-link-mx3">User List</Link></li>
                   <li><Link Link to ="/" className="nav-link-mx3">Logout</Link></li>
                </ul>

            </div>
            </div>
        </div>
     );
}
 
export default AdminNavbar;