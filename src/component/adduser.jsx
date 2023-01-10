import { useState } from 'react';
import '../styles/adduser.css'
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
    let [name,setName]= useState('')
    let [age,setAge]= useState('')
    let [email,setEmail]= useState('')
    let [phoneNumber,setPhoeNumber]= useState('')

    let handleSubmit=(e)=>{
        e.preventDefault()// avoid reloading while click the button
        //data to be posted
        let bookData={name,age,email,phoneNumber}
        // posting to server
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert(`${name} added successfully`)
        navigate('/admin/user-list')
    }
    return ( 
        <div className="adduser">
            <div className="username">
                <h1>Add a New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <label>
                            Name:
                            <input value={name} onChange={(a)=>setName(a.target.value)} id='one' type="Text" placeholder="Enter your name" />
                        </label>
                    </div>
                    <div className="age">
                        <label id='two'>
                            Age:
                            <input value={age} onChange={(a)=>setAge(a.target.value)} type="number" placeholder="Enter your age" />
                        </label>
                    </div>
                    <div className="email">
                        <label>
                            Email:
                            <input value={email} onChange={(a)=>setEmail(a.target.value)} type="email"  placeholder="Enter your email" />
                        </label>
                    </div>
                    <div className="phone">
                        <label id='four'>
                            Phone Number:
                            <input value={phoneNumber} onChange={(a)=>setPhoeNumber(a.target.value)} minLength='10' maxLength='10' type="tel"  placeholder="Enter your phone number" />
                        </label>
                    </div>
                    <button>Submit</button>

                </form>
            </div>
            
        </div>
     );
}
 
export default AddUser;