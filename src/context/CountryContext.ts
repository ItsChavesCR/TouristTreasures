import React from 'react'

type CountryContextType = {

    countryId: number;
    setCountryId: (id : number) => void;
    placeId: number;
    setPlaceId: (id : number) => void;
};

const CountryContext = React.createContext<CountryContextType>({

    countryId: 0,
    setCountryId: () => {},
    placeId: 0,
    setPlaceId: () => {}
});

export default CountryContext;