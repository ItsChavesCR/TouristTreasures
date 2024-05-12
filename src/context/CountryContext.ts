import React from 'react'

type CountryContextType = {

    countryId: number;
    setCountryId: (id : number) => void;
};

const CountryContext = React.createContext<CountryContextType>({

    countryId: 0,
    setCountryId: () => {}
});

export default CountryContext;