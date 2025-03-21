import React from 'react';
import './styles/header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <h1 className='header-logo'>
                    Renimo
                </h1>

                <nav className='header-nav'>
                    <img src='src/assets/icons/bookmark.svg' alt='profile' width={22} />
                    <figure className='profile-figure'>
                        <img src='src/assets/sinon.jpeg' alt='profile' width={50} />
                    </figure>
                </nav>
            </header>
        </>
    )
}