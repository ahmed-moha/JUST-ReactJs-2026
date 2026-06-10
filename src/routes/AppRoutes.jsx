import React from 'react'
import { Routes, Route, useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Products from '../pages/Products';
import NotFound from '../pages/NotFound';
import ProductDetail from '../pages/ProductDetail';
import CreateProduct from '../pages/CreateProduct';
import ProductLayout from '../pages/ProductLayout';
function AppRoutes() {
  // const routes = useRoutes([
  //   { path: '/', element: <Home /> },
  //   { path: '/about', element: <About /> },
  //   { path: '/contact', element: <Contact /> },
  //   {
  //     path: '/products', element: <ProductLayout />, children: [
  //       { index: true, element: <Products /> },
  //       { path: ':id', element: <ProductDetail /> },
  //       { path: 'create', element: <CreateProduct /> },
  //     ]
  //   },

  //   { path: '*', element: <NotFound /> },
  // ]);
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<ProductLayout />} >
        <Route index element={<Products />} />
        <Route path=":id" element={<ProductDetail />} />
        <Route path="create" element={<CreateProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />

  </Routes>
  );

}

export default AppRoutes