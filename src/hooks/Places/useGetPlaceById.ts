import { useEffect, useState } from "react"
import { getPlaceById } from "../../services/Places"


const useGetPlaceById = (id: number) => {

    const [place, setPlace] = useState<Place>({
        placeId: 0,
        countryId: 0,
        name: '',
        image: '',
        price: '',
        rating: 0,
        description: ''
    })

    useEffect(() => {
        (
           async function() {
               const place = await getPlaceById(id);
               setPlace(place);
           }
        )()
     },[id])
  
    return { place };
}

export default useGetPlaceById