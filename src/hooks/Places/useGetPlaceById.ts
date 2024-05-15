import { useEffect, useState } from "react";
import { getPlaceById } from "../../services/Places";
import { PlaceType } from "../../types/PlaceType";


export function useGetPlaceById( placeId: string, countryId: string ) {
  const [place, setPlace] = useState<PlaceType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getPlace() {
      try {
        const place = await getPlaceById(countryId, placeId); //Se podria cambiar
        setPlace(place);
        setLoading(true);
      } catch (error) {
        console.error("Error to get place", error);
      }
    }

    getPlace();
  }, [placeId, countryId]);

  return { place, loading };
}