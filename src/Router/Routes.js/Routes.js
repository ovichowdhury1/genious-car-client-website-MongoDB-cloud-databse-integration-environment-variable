import Main from "../../Layout/Main";
import Checkout from "../../pages/Checkut/Checkout";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Orders from "../../pages/Orders/Orders";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path:'/',
            element: <Home></Home>
         },
         {
            path: '/login',
            element: <Login></Login>
         },
         {
            path: '/signup',
            element:  <SignUp></SignUp>
         },
         {
            path: '/checkout/:id',
            loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`),
            element: <Checkout></Checkout>
         },
         {
            path: '/orders',
            element: <Orders></Orders>
         }
      ]
    }
  ])

  export default router;