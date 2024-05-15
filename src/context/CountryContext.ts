import React from 'react'

type CountryContextType = {

    countryId: number;
    setCountryId: (id : number) => void;
    searchText: string;
    setSearchText: (text: string) => void;
    placeId: number;
    setPlaceId: (id : number) => void;
    page: number;
    setPage: (newPage: number) => void;


};

const CountryContext = React.createContext<CountryContextType>({

    countryId: 0,
    setCountryId: () => {},
    searchText: "",
    setSearchText: () => {},
    placeId: 0,
    setPlaceId: () => {},
    page: 1,
    setPage: () => {}


});

export default CountryContext;