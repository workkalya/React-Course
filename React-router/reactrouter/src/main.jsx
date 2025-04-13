import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './index.css';
import Layout from './Layout';
import { About,Home,Contactus, User, Github, Git } from './components';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contactus />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />} >
       <Route path="" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="contact" element={<Contactus />} />
       <Route path="user/:userid" element={<User />} />
       <Route path="github" element={<Git />} />
       <Route path="github/:userid" element={<Github />} />
    </Route>
  
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);