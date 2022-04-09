import React from 'react'
import logo from '../images/logo.png';
const Header = () => {
  return (
    <div className='header'>
        <img alt='logo' src={logo} width='130' height='50' ></img>
        <h1>Deep Patel</h1>
    </div>
  )
}

export default Header