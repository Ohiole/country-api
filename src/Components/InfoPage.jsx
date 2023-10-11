import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { Data } from '../data';
import CountryPage from './CountryPage'
import { Link } from 'react-router-dom'

function InfoPage() {

  const countryName = useParams()

  const res =  Data.filter(item => item.name === countryName.countryName)

  const name = res[0].name

  const image = res[0].flags.png

  const nativeName = res[0].nativeName

  const population = res[0].population

  const region = res[0].region

  const subRegion = res[0].subregion

  const capital = res[0].capital

  const topLevelDomain = res[0].topLevelDomain

  const currencies = res[0].currencies[0].name
  
  const languages = res[0].languages.map(language => language.name).join(', ')

  const borderCountries = res[0].borders

  const borderEmpty = []

  return (
    <section className="clickCountry">
            <section className="button">
                <Link to='/'>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <button>Back</button>
                </Link>
            </section>
            <CountryPage 
              image = {image}
              name = {name}
              nativeName = {nativeName}
              population = {population}
              region = {region}
              subRegion = {subRegion}
              capital = {capital}
              topLevelDomain = {topLevelDomain}
              currencies = {currencies}
              languages = {languages}
              borderCountries = {res[0].hasOwnProperty('borders') ? borderCountries : borderEmpty}
            />
        </section> 
  )
}

export default InfoPage