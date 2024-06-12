const MyBooks =()=>{
    
    const handle =()=>{
        localStorage.clear();
       
        const li = document.querySelector("li");
        li.remove();

        
    }

    return(
        <div className="books-body">
           <h1>My List of Books</h1>
           <ul>
            <li>
               {localStorage.getItem("mybooks")}  
            </li>
           </ul>


           <button onClick={handle} className="clear-btn">clear</button>
        </div>
    )
}

export default MyBooks;