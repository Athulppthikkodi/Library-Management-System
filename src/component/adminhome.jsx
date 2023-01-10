import { Routes,Route } from "react-router-dom";
import AddBook from "./addbook";
import AddUser from "./adduser";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from "./booklist";
import ReadBook from "./readbook";
import UserList from "./userlist";
const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/user-list" element={<UserList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
                <Route path="/add-user/" element={<AddUser/>}/>
                <Route path="/add-book" element={<AddBook/>}/>
            </Routes>

        </div>
     );
}
 
export default AdminPortal;