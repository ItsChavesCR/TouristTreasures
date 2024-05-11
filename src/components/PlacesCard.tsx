import React, { useEffect, useState } from 'react'
import '../styles/PlacesCard.css';

const PlacesCard = () => {

    const [places, setPlaces] = useState<PlaceType[]>([]);



    useEffect(() => {
        fetch( `https://6632f68bf7d50bbd9b47beee.mockapi.io/places`) //Quitar el dato quemado
            .then(response => response.json())
            .then(json => setPlaces(json))
    }, [])

    return (

        <div className='container-card'>
            {
                places?.length > 0 && places.map((place: PlaceType) => (
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
