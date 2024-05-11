import { useEffect, useState } from "react"
import { getAllCountries } from "../../services/Countries"


const useGetAllCountries = () => {

    const [countries, setCountries] = useState([])

    useEffect(()=> {
        (
           async function() {
               const countries = await getAllCountries();
               setCountries(countries);
           }
        )()
     },[])
  
    return { countries };
}

export default useGetAllCountries