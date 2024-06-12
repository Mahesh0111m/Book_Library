import { Link } from "react-router-dom";
import Logo from "../images/Logo.jpg";


const Header = ()=>{
    return(
        <div className="home-header">
        <div className="book-logo">
           <img src= {Logo} className="logo"></img>
        </div>
        <ul>
            <li>
                <Link to="/allbooks" className="btn">AllBooks</Link>
            </li>
            
        </ul>
    </div>
    )
}

export default Header;