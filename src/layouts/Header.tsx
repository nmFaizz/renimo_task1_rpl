import React from 'react';
import './styles/header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <a href='#' className='header-logo'>
                    Renimo
                </a>

                <nav className='header-nav'>
                    <figure className='profile-figure'>
                        <img src='src/assets/sinon.jpeg' alt='profile' width={50} />
                    </figure>
                </nav>
            </header>
        </>
    )
}