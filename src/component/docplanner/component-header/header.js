import React, { Component } from 'react';
import './header.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='header'>
                <nav className='nav-bar'>
                    <img className="titre" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="image"/>
                <ul className='ul'>
                    <li className='item'> <a href="index.html" id="active-link">About us</a></li>
                    <li className='item'> <a href="https://www.docplanner.com/career" id="active-link">Career</a></li>
                    <li className='item3'>Departments
                    <div class="dropdowns">
                        <a href="https://www.docplanner.com/department?dep=marketing" > Marketing & PR </a>
                        <a href="https://www.docplanner.com/department?dep=customer" > Customer Succes & Sales  </a>
                        <a href="https://www.docplanner.com/department?dep=it" > IT, Product , Design & UX</a>
                        <a href="https://www.docplanner.com/department?dep=finance" > Finance & Administration </a>
                        <a href="https://www.docplanner.com/department?dep=hr" > HR & more </a>
                    </div>
                    </li>
                    
                </ul>
                </nav>
            </div>
         );
    }
}
 
export default Header;