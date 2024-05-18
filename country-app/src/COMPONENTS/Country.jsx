import React from 'react'

const Country = (props) => {

const {country} =props
const {name, flags, capital, population, area} = country

const RemoveCountry = (name) => {

    props.onRemoveCountry(name);
}


  return (
    <article className='mx-auto'>
      
        <div className='flex flex-col gap-2 items-center md:hover:scale-110 md:hover:transition md:hover:duration-[0.7s] bg-[#1e1953] px-8 md:px-12 py-6 rounded-lg text-white font-semibold'>

            <img className='h-[150px] w-[350px]' src={flags.png} alt={name.common} />
            <h3 className='pt-4'>Name: {name.common}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <button className='bg-[tomato] py-2 px-8 rounded-sm hover:bg-[red]' onClick={() => {
                RemoveCountry(name.common)
            }}>Remove Country</button>

        </div>

    </article>
  )
}

export default Country
