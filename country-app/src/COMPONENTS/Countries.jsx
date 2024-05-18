import React from 'react'

import { v4 as uuidv4 } from 'uuid';
import Country from './Country';


const Countries = (props) => {

    

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      
      {

        props.countries.map((country) => {

            const countryNew = {country, id: uuidv4()};

            return <Country {... countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />

        })

      }

    </section>
  )
}

export default Countries
