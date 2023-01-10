import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
let [title,setTitle]= useState("")
let [authors,setAuthors]= useState("")
let [categories,setCategories]= useState("")
let [pageCount,setPageCount]= useState("")
let [shortDescription,setShortDescription]= useState("")
let [longDescription,setLongDescription]= useState("")
let [thumbnailUrl,setThumbnailUrl]= useState("")
let navigate= useNavigate()

let handleSubmit=(e)=>{
    e.preventDefault()// avoid reloading while click the button
    //data to be posted
    let bookData={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
    // posting to server
    fetch('http://localhost:4000/books',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(bookData)
    })
    alert(`${title} is added`)
    navigate('/admin/book-list')
}
    return ( 
        <div className="addbook">
            <h1>Add a book</h1>
            <div className="form">
                <form onSubmit={handleSubmit} className="form-group">
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} className="" type="text" placeholder="Title of book"/>
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} className="" type="text" placeholder="Author of book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setCategories(e.target.value)} className="" type="text" placeholder="Enter book category"/>
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} className="" type="text" placeholder="Page count of book"/>
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} placeholder="Short description" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} placeholder="Long Description" name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} className="" type="text" placeholder="Thumbnail Url"/>
                    </div>
                    <button className="form-but">Add Book</button>
                    
                    
                    
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;