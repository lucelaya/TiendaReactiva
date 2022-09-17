import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import ItemListSerie from './components/shop/ItemListSerie';
import ItemFilterSerie from './components/shop/ItemFilterSerie';
import AppHome from './components/shop/AppHome';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<AppHome />} />
        <Route path='/shop' element={<ItemListContainer />} />
        <Route path='/shop/item/:slug' element={<ItemDetailContainer />} />
        <Route path='/serie' element={<ItemListSerie />} />
        <Route path='/serie/:serie' element={<ItemFilterSerie />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
