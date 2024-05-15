import React, { useState, useEffect } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    // Función para obtener los lugares de la API SearchPlaces
    const fetchPlaces = async () => {
      try {
        const response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/places`);
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };

    // Llamar a la función para obtener lugares cuando cambie la búsqueda
    fetchPlaces();
  }, [searchQuery]);

  useEffect(() => {
    // Filtrar lugares basados en la búsqueda
    const filtered = searchQuery !== '' ?
      places.filter(place =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) :
      [];
    setFilteredPlaces(filtered);
  }, [searchQuery, places]);

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search places..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredPlaces.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
