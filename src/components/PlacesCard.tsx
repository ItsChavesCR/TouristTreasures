import React, { useEffect } from 'react'
import '../styles/PlacesCard.css';
import {  getAllPlaces } from '../services/Places';
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

/*const handleConfirmDelete = async () => {
    console.log ("Submit delete product")
    try{
        await deletePlace(countryId, placeId)

    }
}*/


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
                        <br/>
                        <button id='button' type='submit' value='Delete' >Eliminar</button>
                        <button id='button' type='submit' value='Ediatr' >Editar</button>
                    </div>
                ))
            }       
        </div>
    )
}

export default PlacesCard 
