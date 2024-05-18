import React, { useEffect, useState } from 'react'

const Search = (props) => {

const [searchCountry, setSearchCountry] = useState("");

const handleSearch = (e) => {

    setSearchCountry(e.target.value);
    
}

useEffect (() => {

    props.onSearchCountry(searchCountry);

},[searchCountry]);

  return (

    <div className='flex items-center justify-center mb-10'>
      
    <input className='search bg-transparent h-[45px] w-[320px] border-2 text-white border-[#d83550] rounded-md pl-10 text-[18px]' type="text" name="searchCountry" id="searchCountry" placeholder='Search country'
    
    value={searchCountry}
    onChange={handleSearch}
    
    />
    


    </div>
  )
}

export default Search
