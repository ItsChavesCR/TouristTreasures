import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import '../styles/NewPlace.css'
import { useNavigate } from 'react-router-dom';
import { createPlace } from '../services/Places';
import CountryContext from '../context/CountryContext';

//como paso esto hook donde debe de ser ??
const NewPlace = () => {

  const {countryId} = useContext(CountryContext)


  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = handleSubmit (async (data) => {

    const placeData = JSON.parse(JSON.stringify(data))
    console.log(placeData)
    console.log(data.countryId)

    try {
      await createPlace(data.countryId, placeData)

      navigate('/')
  } catch (error) {
      console.error('Error creating product:', error)
  }
})

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <>
      <h1>Formulario</h1>
      <div className='container_form'>
        <form onSubmit={onSubmit}>
          <div>
            <label>Id</label>
            <input
             type='text' 
            {...register('Id')}
            value={countryId}
            />
          </div>
          <br />
          <div>
            <label>Nombre</label>
            <input 
            
            type='text' 
            {...register('name')} 
            value={countryId}
            />
          </div>
          <br />
          <div>
            <label>Descripción</label>
            <input 
            type='text' 
            {...register('description')} />

          </div>
          <br />
          <div>
            <label>Precio</label>
            <input 
            type='text' 
            {...register('price $')} />
          </div>
          <br />
          <div>
            <label>Rating</label>
            <input
              type="number"
              {...register('rating', {
                max: { value: 5, message: 'El rating no puede ser mayor a 5' },
                min: { value: 0, message: 'El rating no puede ser menor a 0' },
              })}
            />
            {errors.rating?.message && <p>{errors.rating?.message}</p>}
          </div>
          <div className='confirm-input'>
            <button type='submit' value='Aceptar' >Aceptar</button>
            <button type='submit' value='Cancelar' onClick={handleCancel} >Cancelar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPlace