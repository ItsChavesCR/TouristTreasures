import { ReactNode, useState } from 'react';
import CountryContext from './CountryContext'

export const CountryProvider = ({children}: {children : ReactNode}) => {

const [countryId, setCountryId] = useState(0);
const [placeId, setPlaceId] = useState(0);
const [searchText, setSearchText] = useState("");
const [page, setPage] = useState(1);
  return (
    <CountryContext.Provider value={{countryId, setCountryId, placeId, setPlaceId, page, setPage, searchText, setSearchText}}>
        {children}
    </CountryContext.Provider>
  )
}