import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminlog.css'

const AdminLogin = () => {
    let[mail,setMail]=useState("")
    let[password,setPassword]=useState("")
    let navigate= useNavigate()

    let handleLogin=(e)=>{
        e.preventDefault()
        //let data = {mail,password}
        //console.log(data);
        if(mail=="admin@gmail.com" && password=="thikkodipp")
        {
            navigate('/admin/')
        }
        else{
            alert('Invalied Email or Password')
        }

    }
    
    return ( 
        <div className="adminlogin">
            <div className="logincard">
                <h1>Login as Admin....!</h1>
            
            <div className="form">
                <form onSubmit={handleLogin}>
                    <div className="mail">
                        <label>
                            Email *
                            <input type="email"  placeholder="Enter Email" value={mail} onChange={(e) => setMail(e.target.value)} />
                            {/* required: it is used to make that field mandatory */}
                        </label>
                    </div>
                    <div className="pass">
                        <label>
                            Password 
                            <input type="password" placeholder="Enter Password" value={password} onChange={(p)=> setPassword(p.target.value)} />
                        </label>
                    </div>
                    <button>Login</button>
                </form>
                </div>
            </div>
        </div>
     );
    
}
 
export default AdminLogin;