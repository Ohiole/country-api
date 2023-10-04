import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Header() {
  return (
    <div className='header'>
        <header>
            <h1>Where in the world</h1>
            <section className="mode">
                <FontAwesomeIcon icon={faMoon}/>
                <p>Dark Mode</p>
            </section>
        </header>
    </div>
  )
}

export default Header