import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ cart = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='w-full h-[60px] bg-bgColor text-textColor1'>
      <div className='flex justify-between items-center mx-8 py-4'>
        {/* Hamburger Menu for small screens */}
        <div className='sm:hidden flex items-center'>
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleMenu}
            className='cursor-pointer rounded-full bg-textColor p-2'
          />
          {menuOpen && (
            <div className='absolute left-0 top-0 mt-12 w-48 bg-textColor text-textColor2 rounded-lg shadow-lg'>
              <ul className='flex flex-col p-4 space-y-4'>
                <li>
                  <Link to="/" onClick={() => window.location.reload()}>Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/purchase">Shop</Link>
                </li>
                <li>
                  <Link to="/search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </Link>
                </li>
                <li>
                  <div className='relative'>
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      onClick={() => navigate('/purchase')}
                      className='cursor-pointer'
                    />
                    {cart.length > 0 && (
                      <div className='absolute top-0 right-0 rounded-full bg-red-500 w-4 h-4 text-xs text-white text-center'>
                        {cart.length}
                      </div>
                    )}
                  </div>
                </li>
                <li>
                  <p className='border rounded-lg text-center cursor-pointer bg-textColor1 text-textColor2'>Sign Up</p>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Center Logo */}
        <div className='text-center text-textColor font-bold font-kalam flex-1 sm:order-2'>
          Timbu Shop
        </div>

        {/* Right Icons */}
        <div className='flex space-x-4 items-center sm:order-3'>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='cursor-pointer' />
          <div className='relative'>
            <FontAwesomeIcon
              icon={faCartShopping}
              onClick={() => navigate('/purchase')}
              className='cursor-pointer'
            />
            {cart.length > 0 && (
              <div className='absolute top-0 right-0 rounded-full bg-red-500 w-4 h-4 text-xs text-white text-center'>
                {cart.length}
              </div>
            )}
          </div>
          <p className='border rounded-lg text-center cursor-pointer bg-textColor1 text-textColor2 hidden sm:inline'>
            Sign Up
          </p>
        </div>

        {/* Regular Navbar for larger screens */}
        <div className='hidden sm:flex flex-1 justify-between items-center'>
          <div className='flex space-x-8'>
            <Link to="/" onClick={() => window.location.reload()}>Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/purchase" className='text-textColor font-semibold'>Shop</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
