import React from 'react'
import { useForm } from 'react-hook-form';
import '../styles/NewPlace.css'
import { useNavigate } from 'react-router-dom';

//como paso esto hook donde debe de ser ??
const NewPlace = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  }

  const handleCancel = () => {
    navigate('/')
  }

  return (
    <>
      <h1>Formulario</h1>
      <div className='container_form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Id</label>
            <input
          
             type='text' 
            {...register('Id')} />
          </div>
          <br />
          <div>
            <label>Nombre</label>
            <input 
            
            type='text' 
            {...register('name')} />
          </div>
          <br />
          <div>
            <label>Descripción</label>
            <input type='text' 
            {...register('description')} />
          </div>
          <br />
          <div>
            <label>Precio</label>
            <input type='text' 
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
            <input type='submit' value='Aceptar' onClick={onSubmit} />
            <input type='submit' value='Cancelar' onClick={handleCancel} />
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPlace