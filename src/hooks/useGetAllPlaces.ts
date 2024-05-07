import { useEffect, useState } from "react"
import { getAllPlaces } from "../services/Places"


const useGetAllPlaces = () => {

    const [places, setPlaces] = useState<Place[]>([])

    useEffect(()=> {
        (
           async function() {
               const places = await getAllPlaces();
               setPlaces(places);
           }
        )()
     },[])
  
    return { places };
}

export default useGetAllPlaces