import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoBook } from "react-icons/io5";
import './Navbar.scss'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

   

  return (
    <nav className="navbar" id="navbar">
        <div className="container navbar-content flex">

            <div className="logo-and-menu flex flex-sb">
                {/* helps to give link to different html tags apart from anchor tags */}

                <Link to='/' className='logo-menu-link flex'>
                <IoBook className='logo'/>
                {/* <span className="fw-7 fs-24 ls-1">Bookie</span> */}
                </Link>

                <button type='button' className='menu-btn' onClick={handleNavbar} >
                    <HiOutlineMenuAlt3 size={35} />
                </button>

            </div>

            <div className={toggleMenu? "navbar-active show-navbar":"navbar-active"}>

                <ul className="navbar-list">
                    <li className="list-item">
                        <Link to="book" className='list-link text-uppercase text-white fs-20 fw-6 ls-1'>Home</Link>
                    </li>
                    
                    <li className="list-item">
                        <Link to="about" className='list-link text-uppercase text-white fs-20 fw-6 ls-1'>About</Link>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
  )
}

export default Navbar