'use client';

import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen sudah di-mount di client sebelum merender UI
  // untuk menghindari hydration mismatch antara server dan client.
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = (
    <>
      <li>
        <a href="https://github.com/Rizxyu" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-xl"></i> GitHub
        </a>
      </li>
      <li>
        <a href="https://t.me/Rizxyu" target="_blank" rel="noopener noreferrer">
          <i className="ri-telegram-fill text-xl"></i> Telegram
        </a>
      </li>
      {/* Link ke Stats Server, disembunyikan sementara */}
      {/* <li>
        <a href="#server-stats">
          <i className="ri-server-line text-xl"></i> Stats Server
        </a>
      </li> */}
    </>
  );

  return (
    <header className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Rizky Adi
        </Link>
      </div>

      {/* Menu untuk Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end">
        {/* Tombol Tema untuk Desktop */}
        <div className="hidden lg:flex">
          {mounted && (
            <label className="swap swap-rotate btn btn-ghost btn-circle">
              <input type="checkbox" onChange={toggleTheme} checked={theme === 'doublecrush'} />
              <i className="ri-sun-line swap-on text-xl"></i>
              <i className="ri-moon-line swap-off text-xl"></i>
            </label>
          )}
        </div>

        {/* Dropdown untuk Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle swap swap-rotate">
            <input type="checkbox" />
            <i className="ri-menu-line swap-off fill-current text-2xl"></i>
            <i className="ri-close-line swap-on fill-current text-2xl"></i>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            <div className="divider my-1 px-4"></div>
            <li className="flex flex-row justify-between items-center p-2">
              <span>Dark Mode</span>
              {mounted && (
                <input type="checkbox" className="toggle toggle-primary" onChange={toggleTheme} checked={theme === 'doublecrush'} />
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;