export async function createPlace(
    countryId: number,
    newPlace: PlaceType
  ) {
    let response;
    try {
      response = await fetch(`https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/places`),
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newPlace),
        }
      if (!response.ok) throw new Error("Error to create product");
    } catch (error) {
      console.error("Error occurred while creating product: ", error);
      throw error;
    } finally {
      console.log("Finished creating product");
    }
  
    try {
      const responseData: PlaceType = await response.json();
      return responseData;
    } catch (error) {
      console.error("Error occurred while parsing response: ", error);
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
    } finally {
        console.log("Successfully created place");
    }
}


