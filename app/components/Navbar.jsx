"use client"
import React, { useState } from 'react';
import Buttons from './Buttons';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from './Logo';
import Anims from './Anims';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex fixed py-2 md:px-8 px-4 gap-2 w-full items-center shadow-xl relative">
      {/* Logo and Title */}
        <Logo />
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-4  w-full justify-between'> 
      <div className="md:ml-[450px] flex justify-between gap-14 items-center">
      <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
        <a href='#about' className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">About</a>
        </Anims>
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
        <a href='#achievements' className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Achievements</a>
        </Anims>
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
        <a href='#donations' className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Donations</a>
        </Anims>
        <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
        <a href='#events' className="hover:tprimary cursor-pointer transition ease-in-out text-black text-left text-xl text-center">Events</a>
        </Anims>
      </div>
      <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
      <Buttons text='Donate' btnlink='/' />
      </Anims>
      </div>

      
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl focus:outline-none">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-15 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 md:hidden">
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>About</a>
          </Anims>
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Achievements</a>
          </Anims>
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Donations</a>
          </Anims>
          <Anims inAnimation='fadeIn' outAnimation='fadeOut'>
          <a className=" text-black text-left text-lg" onClick={() => setIsOpen(false)}>Events</a>
          </Anims>
          <Buttons text='Donate' btnlink='/' />
        </div>
      )}
    </div>
  );
}

export default Navbar;
