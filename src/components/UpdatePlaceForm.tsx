import '../styles/NewPlaceForm.css'
import usePutPlace from '../hooks/Places/usePutPlace';
import { Link, useParams } from 'react-router-dom';

const UpdatePlaceForm = () => {

  const { countryId, placeId } = useParams<{
    countryId: string;
    placeId: string;
  }>();

  if (!countryId || !placeId) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { register, OnSubmit } = usePutPlace(countryId, placeId);

  return (
    <>
      <h1>Update Form</h1>
      <div className='container_form'>
        <form onSubmit={OnSubmit}>
          <div>
            <label htmlFor='placeidInput'>PlaceId</label>
            <input
              type='text'
              {...register('placeId')}
              id='placeIdInput'
            />
          </div>
          <br />
          <div>
            <label>Nombre</label>
            <input

              type='text'
              {...register('name')}
            />
          </div>
          <br />
          <div>
            <label>Descripción</label>
            <input
              type='text'
              {...register('description')} />
          </div>
          <div>
            <label htmlFor='imagenInput'>Imagen</label>
            <input
              type='text'
              {...register('image')}
              id='imagenInput' />
          </div>
          <br />
          <div>
            <label htmlFor='priceInput'>Precio</label>
            <input
              type='text'
              {...register('price')}
              id='priceInput'
            />
          </div>
          <br />
          <div>
            <label htmlFor='ratingInput'>Rating</label>
            <input
              type="number"
              {...register('rating', {
                max: { value: 5, message: 'El rating no puede ser mayor a 5' },
                min: { value: 0, message: 'El rating no puede ser menor a 0' },
              })}
              id='ratingInput'
            />
           <br/>
            <label
              htmlFor='countryId'>
              <strong>Country</strong>
            </label>
            <br />
            <select
              {...register('countryId')}
              id='countryId'
              required>
              <option >Select country</option>
              <option value='1'> Costa Rica </option>
              <option value='2'> Portugal </option>
              <option value='3'> India </option>
              <option value='4'> Japon </option>
              <option value='5'> Australia </option>
            </select>
          </div>
          <div className='confirm-input'>
            <button className='Button' type='submit' value='Aceptar' >Aceptar</button>
            <Link to={`/places/${countryId}/${placeId}`}>
            <button className='Button' type='submit' value='Cancelar'>Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default UpdatePlaceForm