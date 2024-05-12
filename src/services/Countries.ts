

export async function createCountry(NewPlace: PlaceType) {
  let response 
  try {
   response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(NewPlace),
      }
    )

    if (!response.ok) throw new Error('Error sending data')

    const responseData: PlaceType = await response.json()
    return responseData
  } catch (e) {
    
    console.error(e)
    throw e
  } finally {
    console.log('Finished creating category')
  }
}

export async function getAllCountries() {
  let response
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories`
    )

    if (!response.ok) throw new Error('Error fetching data')

    const responseData: PlaceType[] = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished fetching categories')
  }
}

export async function getPlaceById(id: string) {
  let response
  try {
   response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories/${id}`
    )

    if (!response.ok) throw new Error('Error fetching data')

    const responseData: PlaceType = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished fetching category')
  }
}

export async function updatePlaces(id: string, updatedCategory: PlaceType) {
  let response
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories/${id}`,
      {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedCategory),
      }
    )

    if (!response.ok) throw new Error('Error updating data')

    const responseData: PlaceType = await response.json()
    return responseData
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    console.log('Finished updating category')
  }
}

export async function deleteCategory(id: string) {
  let response
  try {
     response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories/${id}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) throw new Error('Error deleting data')

    return true
  } catch (e) {
    console.error(e)
    throw e
  } finally { 
    console.log('Finished deleting category')
  }
}