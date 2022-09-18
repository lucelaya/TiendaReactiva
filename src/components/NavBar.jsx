import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to={'/'}>
      <img src="/assets/logo.jpg" alt='logo' width="60px"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to={'/'}>Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/category/Sandman'}>Sandman</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/category/100Balas'}>100 Balas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/category/YTLM'}>Y El Ultimio Hombre</NavLink>
        </li>
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
  );
}

export default NavBar;