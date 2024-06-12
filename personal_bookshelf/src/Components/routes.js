import Home from "./Home"
import App from "../App"
import AllBooks from "./AllBooks"
import MyBooks from "./MyBooks"
import Error from "./Error"
import { createBrowserRouter } from "react-router-dom"


const router = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children:[
  
        {
          path:"/",
          element:<Home/>,
              
      }, 
  
        {
          path:"/allbooks",
          element:<AllBooks/>,
          
        },
  
        {
          path:"/mybooks",
          element:<MyBooks/>,
          
        },
  
      ],
      errorElement:<Error/>,
    }
  ]);

  export default router;