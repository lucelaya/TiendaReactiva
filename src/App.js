import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import ItemFilterSandman from './components/shop/ItemFilterSandman';
import AppHome from './components/shop/AppHome';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/shop' element={<ItemListContainer />} />
        <Route path='/shop/item/:slug' element={<ItemDetailContainer />} />
        <Route path='/sandman' element={<ItemFilterSandman />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
