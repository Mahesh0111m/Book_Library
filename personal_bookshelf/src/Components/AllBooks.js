import { useState , useEffect , useRef} from "react";
import BookStore from "./BooksStore";
import { Link } from "react-router-dom";


const AllBooks =()=>{

    const [listofBooks, setlistofBooks] = useState([]);
    const [filteredBooks,setfilteredBooks] = useState([]);
    const [searchText,setsearchText] =useState("");

    useEffect(()=>{
        fetchData();
    },[]);



    const fetchData = async ()=>{
        const data= await fetch(
            "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1."
        );



        const json = await data.json();
       

       setlistofBooks(json?.docs);
       setfilteredBooks(json?.docs);


    }

    useEffect(() => {
        handleFilter();
      }, [searchText, listofBooks]);

      
      const handleFilter = () => {
        if (searchText === '') {
          setfilteredBooks(listofBooks);
        } else {
          const results = listofBooks.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          );
          setfilteredBooks(results);
        }
      };

       
       const handleInputChange = (e)=>{
        setsearchText(e.target.value);

       }

       const data = useRef();
       const handleclick =()=>{
        localStorage.setItem("mybooks", data.current.value);
       }
       
       
      

    return (

        <div className="book-body">
<div className="header">
        <div className="search-box">
        <label >Search Book Name: </label> <br></br>
        <input type="text" value={searchText} onChange={handleInputChange}  ref={data}></input>  
        <button onClick={handleclick} className="search-btn">Search</button>  
       
                <Link to="/mybooks" className="book-btn" >MyBooks</Link>
           
        </div>

        

    </div>

       <div className="card-body">
            
        {filteredBooks.map((book)=>{
            return <BookStore key={book.edition_key} author={book.author_name} title={book.title}/>
        })}
           
       </div>
       </div>
    )
}


export default AllBooks;