import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import { createBrowserRouter,createRoutesFromElements ,Route,RouterProvider} from 'react-router-dom';
import Contact from './components/Contact';
import Career from './components/Career';
import "./App.css"
import Layout from './Layout';




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>

      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/career' element={<Career/>}/>

      



    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
