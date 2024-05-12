import { useEffect, useState } from "react"
import { getAllPlaces } from "../../services/Places"


const useGetAllPlaces = () => {

    const [placesResults, setPlacesResults] = useState<PlaceType[]>([])
useEffect(() => {
  (async function() {
    try {
      const placesResults = await getAllPlaces();
      setPlacesResults(placesResults);
    } catch (error) {
      console.error(error);
    }
  })();
}, []);
  
    return { placesResults, setPlacesResults };
}

export default useGetAllPlaces