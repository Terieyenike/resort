import React, { Component } from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };
  render() {
    return (
      <>
        <nav className='navbar'>
          <div className='nav-center'>
            <div className='nav-header'>
              <Link to='/'>
                <Logo alt='beach resort logo' />
              </Link>
              <button
                type='button'
                className='nav-btn'
                onClick={this.handleToggle}>
                <IoMenu className='nav-icon' />
              </button>
            </div>
            <ul
              className={
                this.state.isOpen ? 'show-nav nav-links' : 'nav-links'
              }>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/rooms'>Rooms</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
