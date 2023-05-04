import './index.css';

import { useEffect, useState } from 'react';

import Cards from './Components/Cards';
import Filter from './Components/Filter'
import FilterRegion from './Components/FilterRegion';
import FilterSubRegion from './Components/FilterSubRegion';
import Pagination from './Components/Pagination';
import Search from './Components/Search';
import Sort from './Components/Sort';

// import { selectCards } from '../common/store/cards';
// import {useSelector} from 'react-redax'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [collections, setCollections] = useState([])
  const [valueSort, setValueSort] = useState('')
  const [valueRegion, setValueRegion] = useState('')
  const [valueSubRegion, setValueSubRegion] = useState('')
  const [value, setValue] = useState('')

  
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://restcountries.com/v3.1/all`)
      .then(res => res.json()).then((json) => {
      setCollections(json)
    }).catch((err) => {
      console.warn(err);
      alert('Ошибка при получении данных.')
    }).finally(() => setIsLoading(false))
  }, [])
  
  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = collections.slice(firstCountryIndex, lastCountryIndex)
  
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // const pageCollection = []
  // for(let i = 1; i <= Math.floor(collections.length / countriesPerPage); i++) {
  //   pageCollection.push(collections[1])
  // }
  
  return (
      <div className="App">
      <div className='header'>
        <div>
          <Sort setValueSort={setValueSort}/>
          <Filter value={value} setValue={setValue}/>
        </div>
        <div>
          <FilterRegion collections={collections} setValueRegion={setValueRegion}/>
          <FilterSubRegion collections={collections} setValueSubRegion={setValueSubRegion}/>
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='cards'>
        {isLoading ? (<h2 className='loading'>Loading...</h2>
        ): valueSort === 'reset' ? (
          currentCountry
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : valueSort === 'population' ? (
          collections
            .sort((a, b) => b.population - a.population)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : valueSort === 'area' ? (
          collections
            .sort((a, b) => b.area - a.area)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : value === 'dependent' ? (
          collections
            .filter((a) => a.independent)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : value === 'independent' ? (
          collections
            .filter((a) => !a.independent)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : valueSubRegion ? (
          collections
            .filter((a) => a.subregion === valueSubRegion)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : valueRegion ? (
          collections
            .filter((a) => a.region === valueRegion)
            .map((country) => (
            <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
          ))
        ) : searchValue ? (
          collections
            .filter(country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => (
              <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
            ))
        ) : (
          currentCountry
            .map((country) => (
              <Cards key={Math.random()} img={country.flags.png} name={country.name.common} capital={country.capital} population={country.population} area={country.area}/>
            ))
        )
        }
        </div>
        <Pagination 
            countriesPerPage={countriesPerPage}
            totalCountries={collections.length-1}
            pagination={pagination}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
        />
        {/* <ul className="pagination">
          {
            [...Array(collections.length / countriesPerPage - 1)].map((_, i) => (
              <li key={Math.random()} onClick={() => setCurrentPage(i+1)} className={currentPage === i+1 ? 'active' : ''}>{i+1}</li>
            ))
          }
        </ul> */}
      </div>
  );
}

export default App;
