import { PlaceType } from "../types/PlaceType";

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
    if (!response.ok) throw new Error("Error al crear place");
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
    if (!response.ok) throw new Error("Error to get place");
  } catch (error) {
    console.error("Error occurred while fetching place: ", error);
    throw error;
  } 
  try{
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response", error);
    throw error;
  }
}

export async function deletePlace(countryId: string, placeId: string) {
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



 export async function updatePlace( countryId: number, placeId: number, updatePlace: PlaceType ) {
  let response;
  try {
    response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/places/${placeId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatePlace),
      }
    );
    if (!response.ok) throw new Error("Error updating place");
  } catch (error) {
    console.error("Error occurred while updating place: ", error);
    throw error;
  } 
  try {
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("an error has occurred with the response: ", error);
    throw error;
  }
}

// export async function searchPlaces() {
//   try {
//       const response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/places`, {
//           method: "GET",
//           headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//           throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       return data;
//   } catch (error) {
//       console.error("Error fetching data:", error);
//       throw error;
//   } 
// }





