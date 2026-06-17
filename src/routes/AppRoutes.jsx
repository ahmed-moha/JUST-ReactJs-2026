import React from 'react'
import { Routes, Route, useRoutes, Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'
import CreateProduct from '../pages/CreateProduct'
import ProductLayout from '../pages/ProductLayout'
function AppRoutes() {
const routes=useRoutes([
    {path:"/", element:<Home />},
    {path:"/about", element:<About />},
    {path:"/contact", element:<Contact />},
    {path:"/products", element:<Outlet />, children:[
        {index: true, element:<Products />},
        {path:":id", element:<ProductDetail />},
        {path:"create", element:<CreateProduct />},
        
    ]},
    
    {path:"*", element:<NotFound />},
]);

return routes; 
//   return (
//     <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//     </Routes>
//   )
}

export default AppRoutes