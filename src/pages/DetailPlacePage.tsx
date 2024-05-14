import { useContext } from 'react'
import CountryContext from '../context/CountryContext';
import { useGetPlaceById } from '../hooks/Places/useGetPlaceById';
import { Link } from 'react-router-dom';
import DeletePlaceModal from '../components/DeletePlaceModal';

export const DetailPlacePage = () => {
     
    const { placeId, countryId } = useContext(CountryContext);

    const { place } = useGetPlaceById( placeId, countryId );

    return (
        <div>
            <section>
                <article>
                    <div className='image-container'>
                        <img src={place.image} ></img>
                    </div>
                    <div className='information-details'>
                        <h1 className='detail-name'>{place.name}</h1>

                        <div>
                            <p>Price: {place.price}</p>
                        </div>
                        <div>
                            <p className=" text-wrap">Description: {place.description}</p>
                        </div>

                        <div>
                            <p>Rating: {place.rating}</p>
                        </div>
                    </div>
                </article>
                <div className='buttons-udb'>
                    <Link to={'/'}>
                    <button>
                        Back
                    </button>
                    </Link>
                    <Link to={`/updateplace/${place.countryId}/${place.placeId}`}>
                    <button>
                        Update
                    </button>
                    </Link>
                    <DeletePlaceModal placeId = {place.placeId} countryId = {place.countryId} name=  {place.name} />
                </div>
            </section>
        </div>
    )
}

