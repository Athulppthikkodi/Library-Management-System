import { useEffect, useState } from "react";
import '../styles/booklist.css'
import { useNavigate } from "react-router-dom";



    const BookList=()=>{
        let [books,setBook]=useState([])
        useEffect(()=>{
            let fetchData=async()=>{
                let response=await fetch('http://localhost:4000/books')
                let data=await response.json()
                setBook(data)
            }
            fetchData()
        },[books])//dependance==> it will run on every runder(the updated data will show)
        let remove=(id,title)=>{
           fetch(`http://localhost:4000/books/${id}`,{
                method:'DELETE'
           });
           alert(`${title} is removed permenently`)
        }
        
        
        let navigate= useNavigate()
        let read=(id)=>{
            navigate(`/admin/book-list/${id}`)
        }
        
    
    return ( 

        <div className="bookList">
            <h1>Book List:{books.length}</h1>
            <div className="book-section">
                {
                    books.map(data=>(
                        <div className="bookCard">
                            <div className="image">
                                <img src={data.thumbnailUrl} alt="" />
                                </div>
                                <div className="content">
                            <h2>{data.title}</h2>
                            <h3>{data.authors}</h3>
                            <h3>{data.pageCount}</h3>
                            <button onClick={()=>read(data.id,data.title)}>Read More</button>
                            <button onClick={()=>remove(data.id,data.title)}>Delete</button>
                            </div>
                        
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default BookList;