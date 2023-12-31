import React from 'react';
import { useState, useEffect } from 'react';
import Cart from './CartIcon';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth < 600) {
    return (
      <div className='drawer drawer-end '>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          {/* Navbar */}
          <div className='w-full navbar bg-base-300 h-[5rem]'>
            <div className='flex-1 px-2 mx-2 text-xl font-semibold '>
              <Link to='/shopow/' className='btn text-xl '>
                Shopow
              </Link>
            </div>
            <div className='flex-none '>
              <label
                htmlFor='my-drawer-3'
                aria-label='open sidebar'
                className='btn btn-square btn-ghost'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-6 h-6 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {/* Page content here */}
        </div>

        <div className='drawer-side content-center z-[9999]'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <div className='menu flex items-center p-4 bg-base-200'>
            {/* Sidebar content here */}

            <Link className='btn btn-ghost items-center' to='/shopow/'>
              Home
            </Link>

            <Link className='btn btn-ghost' to='/shopow/products'>
              Products
            </Link>

            <ThemeBtn />

            <div className='dropdown dropdown-end'>
              <Cart />
              <div
                tabIndex={0}
                className='mt-3 z-[1] card card-compact dropdown-content w-40 bg-base-100 shadow'
              >
                <div className='card-body'>
                  <span className='font-bold text-lg'>8 Items</span>
                  <span className='text-info'>Subtotal: $999</span>
                  <div className='card-actions'>
                    <Link
                      to='/shopow/cart'
                      className='btn btn-primary btn-block'
                    >
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <Link to='/' className='btn btn-ghost text-lg'>
                Login
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav className='bg-base-300'>
      <div className='navbar h-[5rem] max-w-5xl mx-auto flex justify-between'>
        <div className='flex-1'>
          <Link to='/shopow/' className='btn text-xl '>
            Shopow
          </Link>
        </div>
        <div className='flex-none'>
          <Link to='/shopow/' className='btn btn-ghost'>
            Home
          </Link>
          <Link to='/shopow/products' className='btn btn-ghost'>
            Products
          </Link>
          <ThemeBtn />
          <div className='dropdown dropdown-end'>
            <Cart />
            <div
              tabIndex={0}
              className='mt-3 z-[1] card card-compact dropdown-content w-40 bg-base-100 shadow'
            >
              <div className='card-body '>
                <span className='font-bold text-lg'>8 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <Link to='/shopow/cart' className='btn btn-primary btn-block'>
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to='/' className='btn btn-ghost text-lg'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
