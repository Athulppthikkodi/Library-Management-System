import { useState,useEffect } from "react"
import '../styles/userlist.css'
const UserList = () => {
    let [userData,setUser]=useState([])
            useEffect(()=>{
                let fetchData=async()=>{
                    let response=await fetch('http://localhost:4000/users')
                    let data= await response.json()
                    setUser(data)
                }
                fetchData()
            },[])
            let remove=(id,name)=>{
                setUser(userData.filter(x=>x.id!=id))
                alert(`${name} is removed`)
            }
    return ( 
        <div className="userList">
            <h1>User List:{userData.length}</h1>
            <div className="user-section">
                {
                    userData.map((a)=>(
                        <div className="user1">
                        <div className="userCard">
                            <h3>{a.name}</h3>
                            <h4>{a.age}</h4>
                            <h4>{a.email}</h4>
                            <h4>{a.phoneNumber}</h4>
                            <button onClick={()=>remove(a.id,a.name)}>Delete</button>
                        </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
     );
}
 
export default UserList;