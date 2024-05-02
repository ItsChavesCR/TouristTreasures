import React, { useEffect, useState } from 'react'
import './CityCard.css';

const CityCard = () => {

    const [citys, setCitys] = useState<City[]>([]);

useEffect(() => {
    fetch("https://6632f68bf7d50bbd9b47beee.mockapi.io/citys")
      .then(response => response.json())
      .then(json => setCitys(json))
  }, [])

  return (
    
    <div className='container-card'>
    {
        citys?.length > 0 && citys.map((item: City)=>(
            <div key={item.cityId} className='result-item'>
                <img width={'100%'} height={200} src={item.image}></img>
                <strong> {item.direction}</strong>
                <br/>
                <strong> {item.zipCode}</strong>
                <p className='product-title'>{item.name}</p>
            </div>
        ))
    }
    </div>
  )
}

export default CityCard