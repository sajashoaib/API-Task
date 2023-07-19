import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';
const Header=()=>{
  return (
      
    <header className='header'>
      <h1>Header</h1>

      <nav>
        <ul>
                 <li>  <Link to= {PATHS.HOME}>  Home  </Link> </li>
           <li>  <Link to= {PATHS.ABOUT}>  about  </Link> </li>
           <li>  <Link to= '/info'>  info  </Link> </li>
          <li>  <Link to= {PATHS.POSTS.ROOT}>  POSTS  </Link> </li>
  
        </ul>
      </nav>
    </header>
  );
}


export default Header;