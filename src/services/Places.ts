export async function createPlaces(
  PostPlace: PlaceType,
) {
  let response;
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/places`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(PostPlace),
      }
    );
    if (!response.ok) throw new Error("Error al crear producto");
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
}


export async function getAllPlaces() {
    try {
        const response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/places`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    } 
}

export async function getPlaceById(countryId: string, placeId: string) {
  let response;
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/places/${placeId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get product");
  } catch (error) {
    console.error("Error occurred while fetching product: ", error);
    throw error;
  } 
}


export async function getProductByCountry(
  countryId: number,
  page: number,
  title: string
) {
  let endpoint;

  if (countryId !== 0) {
    endpoint = `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories/${countryId}/products`;
  } else {
    endpoint = `https://${
      import.meta.env.VITE_API_URL
    }.mockapi.io/api/v1/products`;
  }
  const url = new URL(`${endpoint}`);
  url.searchParams.append("limit", "5");
  url.searchParams.append("page", page.toString());
  if (title !== "") {
    url.searchParams.append("title", title);
  }

  let response;
  try {
    response = await fetch(`${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Error to get products by category");
  } catch (error) {
    console.error(
      "Error occurred while fetching products by category: ",
      error
    );
    throw error;
  } 
}

export async function deletePlace(placeId: number, countryId: number) {
  let response;
  try {
    response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/places/${placeId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    )
    if (!response.ok) throw new Error("Error deleting place");
  } catch (error) {
    console.error("Error occurred while deleting place: ", error);
    throw error;
  } 
}


 export async function updatePlace(
  countryId: string,
  placeId: string,
  updatedPlace: PlaceType
) {
  let response;
  try {
    response = await fetch(
      `https://.mockapi.io/countries/${countryId}/place/${placeId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPlace),
      }
    );
    if (!response.ok) throw new Error("Error updating product");
  } catch (error) {
    console.error("Error occurred while updating product: ", error);
    throw error;
  } 
  try {
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}




