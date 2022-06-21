import Link from 'next/link'
import Logo from '../public/wy-logo.svg'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from "react"



const Navbar = () => {

     // set ref for height of navbar 
    const navSize = useRef(null)

    const [mobileNavTop, setTop] = useState(navSize.current?.clientHeight)
    
    // set 'top' value for mobile nav on window click (should probably be set to on promobar click)
    useEffect(() => {
        function handleResize() {
            setTop(navSize.current?.clientHeight)
        }
        window.addEventListener('resize', handleResize)
        window.addEventListener('click', handleResize)
    })

    // burger toggle 
    const [navbarOpen, setNavbarOpen] = useState(true)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    
    const closeMenu = () => {
        setNavbarOpen(true)
    }

    return (
        <nav ref={navSize}>
            <div className='nav-bar'>
            <i className="icon-bars-solid" title="menu"></i>
                <div className='logo'>
                    <Link href='/'>
                        <a><Image src={Logo} alt='Weyland Yutani' width={ 320 } height={ 80 } /></a>
                    </Link>
                </div>
                <i className="icon-bars-solid" title="menu"></i>

                {/* <button className='hamburger' onClick={ handleToggle } aria-label="mobile menu">
                        {navbarOpen ? (
                            '+'
                        ) : (
                           '-'
                        )}
                </button>
                <ul className={`nav-menu ${navbarOpen ? "showMenu" : ""}`} style={{ top: mobileNavTop }}>
                    <li><Link href='#about'><a onClick={() => closeMenu()}>about</a></Link></li>
                    <li><Link href='#engineering'><a onClick={() => closeMenu()}>engineer</a></Link></li>
                    <li><Link href='#exploration'><a onClick={() => closeMenu()}>explore</a></Link></li>
                    <li><Link href='#terraforming'><a onClick={() => closeMenu()}>terraform</a></Link></li>
                </ul> */}
            </div>
        </nav>
    );
}



export default Navbar;

