
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Countries from './COMPONENTS/Countries';
import Search from './COMPONENTS/Search';


  const url = "https://restcountries.com/v3.1/all"


function App() {

const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);
const [countries, setCountries] = useState([]);
const [filteredCountries, setFilteredCountries] = useState(countries);


const fetchData = async() => {
  setIsLoading(true);

  try {

    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setFilteredCountries(data);
    setIsLoading(false);
    setError(null);

  } catch (error) {

    setIsLoading(false);
    setError(error);

  }

}

useEffect(() => {

  fetchData(url);

},[])


const handleRemoveCountry = (name) => {

  const filter = filteredCountries.filter((country) => 
    country.name.common != name);
    setFilteredCountries(filter);
    toast(name+ " Country Remove Successfull");
}

const handleSearchCountry = (searchValue) => {

  let value = searchValue.toLowerCase();
  const newCountries = countries.filter((country) => {

    const countryName = country.name.common.toLowerCase();

    return countryName.startsWith(value);
  })  

  setFilteredCountries(newCountries);

}

  return (

    <>


     <h1 className='text-4xl text-center font-bold font-mono mb-6 mt-4 text-white'>Country Web</h1>
     <Search onSearchCountry={handleSearchCountry} />
     
     {isLoading && <p className='text-center font-semibold text-white'>Please wait sometimes...</p>}
     {error && <p>{error.message}</p>}
     {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
     <ToastContainer />
    </>

  )
}

export default App
