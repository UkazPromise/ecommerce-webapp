import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ cart = [] }) => {
  const navigate = useNavigate();

  return (
    <div className='w-[1444px] h-[60px] bg-bgColor text-textColor1'>
      <div className='flex mx-8 py-4 space-x-96'>
      <span className='flex space-x-8'>
          <Link to="/body" onClick={() => window.location.reload()}>Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/purchase" className='text-textColor font-semibold'>Shop</Link>
        </span>
        <span className='place-content-center text-textColor font-bold font-kalam'>Timbu Shop</span>
        <span className='flex space-x-8 ml-12'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
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
          <p className='border rounded-lg border-spacing-4 text-center w-28 cursor-pointer bg-textColor1 text-textColor2'>Sign Up</p>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
