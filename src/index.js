import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import ItemFilterSandman from './components/shop/ItemFilterSandman';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/shop' element={<ItemListContainer/>}/>
    <Route path='/shop/item/:slug' element={<ItemDetailContainer/>}/>
    <Route path='/sandman' element={<ItemFilterSandman/>}/>
  </Routes>
  {/* <Footer/> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
