
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <nav className='main-menu'>
      <ul>
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/saludo'>Saludo</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
