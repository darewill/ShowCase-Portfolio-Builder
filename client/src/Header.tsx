import React from 'react'
import '../style/Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <div className='header__wrapper flex justify-between items-center mt-[20px]'>
        <div className="header__logo">
            <h1 className='header__logo-text text-[40px] ml-[30px] text-white tracking-[-4px] font-bold'>ShowCase</h1>
        </div>
        <div className="header-menu flex mr-[30px] font-semibold">
            <p className='header__menu-item bg-[#122285] h-[35px] w-[100px] text-center rounded-2xl'>Sign up</p>
            <p className='header__menu-line-item mx-[10px] text-[20px] text-[#d5d5d582]'>|</p>
            <a className='header__menu-item' href='https://github.com/darewill'><FontAwesomeIcon icon={faGithub}/></a>
            <a className='header__menu-item' href='https://www.linkedin.com/in/urimrexhepi/'><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
    </div>
  )
}
