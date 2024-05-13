
import { ReactNode, useState } from 'react';
import CountryContext from './CountryContext'



const CountryProvider = ({children}: {children : ReactNode}) => {

const [countryId, setCountryId] = useState(0);


  return (
    <CountryContext.Provider value={{countryId, setCountryId}}>
        {children}
    </CountryContext.Provider>
  )
}

export default CountryProvider;