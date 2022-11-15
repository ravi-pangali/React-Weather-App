import React from 'react'
import { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { geoApiOption, GEO_API_URL } from "../api"

const SearchBox = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOption)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <div className='SearchBox flex w-full px-20 pt-3'>
      <AsyncPaginate
        className='w-full'
        placeholder="Search....."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default SearchBox