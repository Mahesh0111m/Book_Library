import { Link } from "react-router-dom";
import { FaLinkedin ,FaGithub } from "react-icons/fa";
import Header from "./Header";

const Home = ()=>{
    return(
        <div className="home-container">
            <Header/>
            <p className="quote">
            "A room without books is like a body without a soul." — <span>Marcus Tullius Cicero</span>
            </p>
            
            <div className="info">
            <p>
           <span> Welcome</span> to our Book Project, Books are one of the most valuable resources available to us, offering countless benefits that extend beyond mere entertainment. They are a reservoir of knowledge, wisdom, and creativity, playing a crucial role in our personal and intellectual development. Through books, we gain access to a wealth of information on a wide range of topics, allowing us to expand our knowledge and deepen our understanding of the world.
            </p>
            <p>
            Reading regularly enhances brain function, improving vocabulary, comprehension, and critical thinking skills. It stimulates mental processes, boosts memory, and enhances cognitive abilities. Additionally, engaging with a good book can be a great way to unwind and reduce stress, providing a temporary escape from the pressures of daily life.            </p>
            <p>
            Books also help develop empathy by allowing readers to experience life from various perspectives, which in turn improves social skills and emotional intelligence. They stimulate creativity and imagination, encouraging readers to envision new ideas, scenarios, and possibilities, fostering a more innovative mindset.            </p>
            <p>
            For students, books are essential educational tools, providing structured learning and enhancing comprehension and retention of subject matter. Books expose readers to different cultures, traditions, and ways of life, promoting cultural awareness and appreciation, and encouraging a more inclusive and diverse outlook.            </p>
           
        </div>
        <div className="footer">
        <p >Developed By Mahesh</p>
            <Link to="https://www.linkedin.com/in/mahesh1010/" className="icons"><FaLinkedin className="icon1"/></Link>
            <Link to="https://github.com/Mahesh0111m" className="icons"><FaGithub className="icon1"/></Link>
        </div>
       
        </div>
        
    )
}

export default Home;