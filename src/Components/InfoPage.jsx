import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { Data } from '../data';
import CountryPage from './CountryPage'
import { Link } from 'react-router-dom'

function InfoPage() {
  const [country, setCountry] = useState([]);

  const countryName = useParams()

  const getCountryByName = () => {

    const res = (Data.filter(item => item.name === countryName.countryName));    


  }

  useEffect(() => {
    getCountryByName()
  }, [countryName])


  return (
    <section className="clickCountry">
            <section className="button">
                <Link to='/'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <button>Back</button>
                </Link>
            </section>
            {
            country?.map((country, key) => ( <CountryPage 
              key={key}
              image = {country.flags.png}
              name = {country.name}
              nativeName = {country.nativeName}
              population = {country.population}
              region = {country.region}
              subRegion = {country.subregion}
              capital = {country.capital}
              topLevelDomain = {country.topLevelDomain}
              currencies = {country.currencies}
              languages = {country.languages}
              borderCountries = {country.borders}
            />))
            }
        </section> 
  )
}

export default InfoPage