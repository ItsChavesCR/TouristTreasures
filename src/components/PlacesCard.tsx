import React, { useEffect } from 'react'
import '../styles/PlacesCard.css';
import { getAllPlaces } from '../services/Places';
import useGetAllPlaces from '../hooks/Places/useGetAllPlaces';

const PlacesCard = () => {

    const { placesResults , setPlacesResults } = useGetAllPlaces ();

    useEffect(() => {
        getAllPlaces()
          .then(placesResults => {
            setPlacesResults(placesResults);
          })
          .catch(error => {
            console.error(error);
          });
      }, [setPlacesResults]);

    return (
        <div className='container-card'>
            {
                placesResults?.length > 0 && placesResults.map((place: PlaceType) => (
                    <div key={place.placeId} className='place-card'>
                        <img id='place-image' src={place.image}></img>
                        <strong id='place-name'> {place.name}</strong>
                        <br />
                        <p id='place-description'> {place.description}</p>
                        <p id='place-price'>{place.price}</p>
                        <p id='place-rating' >{place.rating}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default PlacesCard 
