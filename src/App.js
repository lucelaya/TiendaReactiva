import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { MyComicsContainer } from './components/MyComicsContainer';

function App() {

  return (
    <div className="App">
      <h1>Tienda Reactiva-Celaya Lucas</h1>
      <NavBar/>
      <ItemListContainer greetings={'Saludos José'}/>
      <MyComicsContainer />
    </div>
  );
}

export default App;
