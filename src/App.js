import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <h1>Tienda Reactiva-Celaya Lucas</h1>
      <NavBar/>
      <ItemListContainer greetings={'Saludos José'}/>
    </div>
  );
}

export default App;
