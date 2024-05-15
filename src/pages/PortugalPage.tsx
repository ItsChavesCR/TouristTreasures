import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PlaceType } from "../types/PlaceType";
import { Link } from "react-router-dom";


const PortugalPage = () => {

const countryId = 2;

const [places, setPlaces] = useState<PlaceType[]>([]);

useEffect(() => {
    fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/places`)
        .then(response => response.json()) 
        .then(json => setPlaces(json))
}, [])

  return (

      <>
          <Header />
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
                          <div className='container-details'>
                            <Link to={`/places/${place.countryId}/${place.placeId}`}>
                                <button className='button-details'>
                                    More Details
                                </button>
                            </Link>
                        </div>
                      </div>
                  ))
              }
          </div>
          <Footer/>
      </>

  )
}

export default PortugalPage