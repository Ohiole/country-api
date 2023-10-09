import React from 'react'

function CountryItem({ image, name, population, region, capital}) {


  return (
      <section className='countryItem'>
        <img src={image} alt="Country Flag" />
        <section className="info">
            <h2>{name}</h2>
            <section className="otherInfo">
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </section>
        </section>
      </section>
  )
}

export default CountryItem