import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Data } from '../data';
import { Link } from 'react-router-dom'
import CountryItem from './CountryItem';

function MainPage() {
    const [selectValue, setSelectValue] = useState('Filter by region');
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const shuffle = () => {
            for (let i = Data.length - 1; i > 0; i--) { 
              const j = Math.floor(Math.random() * (i + 1));
             [Data[i], Data[j]] = [Data[j], Data[i]]; 
            }  

            return Data
        };
        shuffle();
    }, [])

    const updateValue = (selectValue) => {
        setIsOpen(false);
        setSelectValue(selectValue);
    }

    let africa = Data.filter(item => item.region === 'Africa');
    let america = Data.filter(item => item.region === 'Americas');
    let asia = Data.filter(item => item.region === 'Asia');
    let europe = Data.filter(item => item.region === 'Europe');
    let oceania = Data.filter(item => item.region === 'Oceania');

    function searchIt(e) {
        setSearchValue(e.target.value)
    }

  return (
    <main>
        <section className='countryPage'>
            <section className="search">
                <section className="input">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder='Search for a country...' value={searchValue} onChange={searchIt}
                    onFocus={() => setIsOpen(false)} />
                </section>
                <section className="options">
                    <section className="filter" onClick={() => setIsOpen(!isOpen)}>
                        <p>{selectValue}</p>
                        <FontAwesomeIcon icon={faAngleDown} className={isOpen ? 'icon rotate' : 'icon'} />
                    </section>
                    { isOpen ? <section className="eachOpt">
                        <p onClick={() => updateValue('Filter by region')}>All</p>
                        <p onClick={() => updateValue('Africa')}>Africa</p>
                        <p onClick={() => updateValue('America')}>America</p>
                        <p onClick={() => updateValue('Asia')}>Asia</p>
                        <p onClick={() => updateValue('Europe')}>Europe</p>
                        <p onClick={() => updateValue('Oceania')}>Oceania</p>
                    </section> : ''}
                </section>
            </section>
            <section className="countries">
                { 
                    selectValue === 'Filter by region' &&
                    (Data.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link>
                     ))
                } 
                {
                    selectValue === 'Africa' &&
                    (africa.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link>))
                }
                {
                    selectValue === 'America' &&
                    (america.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link> ))
                }
                {
                    selectValue === 'Asia' &&
                    (asia.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link> ))
                }
                {
                    selectValue === 'Europe' &&
                    (europe.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link> ))
                }
                {
                    selectValue === 'Oceania' &&
                    (oceania.filter((item) => {
                        return searchValue.toLowerCase() ===  '' ? item : item.name.toLowerCase().includes(searchValue)
                    }).map((item, key) => 
                    <Link to={`/item/${item.name}`}>
                        <CountryItem 
                        key={key}
                        image={item.flags.png}
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        />
                    </Link>))
                }
            </section>
        </section> 
    </main>
  )
}

export default MainPage