import { Route, Routes } from "react-router-dom";
import BookList from "./booklist";
import UserDashboard from "./userdashboard";
import UserNavbar from "./usernavbar";
import ReadBook from "./readbook";


const UserPortal = () => {
    return ( 
        <div className="userportal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/> 
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>         
            </Routes>
        </div>
     );
}
 
export default UserPortal;