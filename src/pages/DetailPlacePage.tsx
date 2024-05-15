
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

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { place } = useGetPlaceById(placeId, countryId);

    return (
        <>
            <section>
                <article>
                    <div className='image-container'>
                        <img className="detail-image" src={place?.image} ></img>
                    </div>
                    <div className='information-details'>
                        <h1 className="detail-name"><strong>{place?.name}</strong></h1>

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
                        <button className="Button">
                            Back
                        </button>
                    </Link>
                    <Link to={`/updateplace/${place?.countryId}/${place?.placeId}`}>
                        <button className="Button">
                            Update
                        </button>
                    </Link>
                    <DeletePlaceModal placeId={place?.placeId} countryId={place?.countryId} />
                </div>
            </section>
        </>
    )
}
