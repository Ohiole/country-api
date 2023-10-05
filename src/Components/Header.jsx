import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons';

function Header({ changeBg, bgMode }) {

  return (
    <header>
        <h1>Where in the world?</h1>
        <section className="mode">
            <FontAwesomeIcon icon={faMoon} onClick={changeBg} className='icon'/>
            <p>{bgMode ? 'Light Mode' : 'Dark Mode'}</p>
        </section>
    </header>
  )
}

export default Header