
import { useGetPlaceById } from '../hooks/Places/useGetPlaceById';
import { Link, useParams } from 'react-router-dom';
import DeletePlaceModal from '../components/DeletePlaceModal';

export const DetailPlacePage = () => {

    const { countryId, placeId } = useParams<{
        countryId: string;
        placeId: string;
    }>();

    if (!countryId || !placeId) {
        return <div></div>
    }

    const { place } = useGetPlaceById(placeId, countryId); 

    return (
        <>
            <section>
                <article>
                    <div className='image-container'>
                        <img className="" src={place?.image} ></img>
                    </div>
                    <div className='information-details'>
                        <h1 className="text-xl"><strong>{place?.name}</strong></h1>

                        <div>
                            <p>Price: {place?.price}</p>
                        </div>
                        <div>
                            <p className=" text-wrap">Description: {place?.description}</p>
                        </div>

                        <div>
                            <p>Rating: {place?.rating}</p>
                        </div>
                    </div>
                </article>
                <div className='buttons-udb'>
                    <Link to={'/'}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                        Back
                    </button>
                    </Link>
                    <Link to={`/updateplace/${place?.countryId}/${place?.placeId}`}>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                        Update
                    </button>
                    </Link>
                    <DeletePlaceModal placeId = {place?.placeId} countryId = {place?.countryId} />
                </div>
            </section>
        </>
    )
}

