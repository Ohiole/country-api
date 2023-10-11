import React from 'react'



function CountryPage({image, name, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borderCountries}) {

  return (
    <section className='countryInfo'>
      <img src={image} alt="Country Flag" />
      <section className="information">
        <h1 className='countryName'>{name}</h1>
        <section className="otherInfo">
          <ul className="leftSide">
            <li>Native Name: <span>{nativeName}</span></li>
            <li>Population: <span>{population}</span></li>
            <li>Region: <span>{region}</span></li>
            <li>Sub Region: <span>{subRegion}</span></li>
            <li>Capital: <span>{capital}</span></li>
          </ul>
          <ul className="rightSide">
            <li>Top Level Domain: <span>{topLevelDomain}</span></li>
            <li>Currencies: <span>{currencies}</span></li>
            <li>Languages: <span>{languages}</span></li>
          </ul>
        </section>
        <section className="borderCountries">
          <p className='name'>Border Countries:</p>
          <section className="neighbors">
            {
              borderCountries.map((border, key) => 
                <div className="neighoringCountry" key={key}>
                  <p>{border}</p>
                </div>)
            }
          </section>
        </section>
      </section>    
    </section>
  )
}

export default CountryPage