import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemListContainer from './components/shop/ItemListContainer';
import ItemListSerie from './components/shop/ItemListSerie';
import ItemFilterSerie from './components/shop/ItemFilterSerie';
import AppHome from './components/shop/AppHome';
import { CarrContextProvider } from "./context/CarrContext";
import { Carrito } from "./components/shop/Carrito";

function App() {

  return (
    <CarrContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<AppHome />} />
          <Route path='/shop' element={<ItemListContainer />} />
          <Route path='/shop/item/:slug' element={<ItemDetailContainer />} />
          <Route path='/serie' element={<ItemListSerie />} />
          <Route path='/serie/:serie' element={<ItemFilterSerie />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </CarrContextProvider>
  );
}

export default App;
