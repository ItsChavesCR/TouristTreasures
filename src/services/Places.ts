

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

export async function getProductById(countryId: string, placeId: string) {
  let response;
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/countries/${countryId}/products/${placeId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error to get product");
  } catch (error) {
    console.error("Error occurred while fetching product: ", error);
    throw error;
  } finally {
    console.log("Finished fetching product");
  }
  try {
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
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
  } finally {
    console.log("Finished fetching products by category");
  }

  try {
    const responseData: PlaceType[] = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}


export async function updateProduct(
  countryId: string,
  placeId: string,
  updatedProduct: PlaceType
) {
  let response;
  try {
    response = await fetch(
      `https://.mockapi.io/countries/${countryId}/place/${placeId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      }
    );
    if (!response.ok) throw new Error("Error updating product");
  } catch (error) {
    console.error("Error occurred while updating product: ", error);
    throw error;
  } finally {
    console.log("Finished updating product");
  }

  try {
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}


export async function deleteProduct(countryId: number, placeId: number) {
  let response;
  try {
    response = await fetch(
      `https://6632f68bf7d50bbd9b47beee.mockapi.io/api/v1/categories/${countryId}/products/${placeId}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );
    if (!response.ok) throw new Error("Error deleting product");
  } catch (error) {
    console.error("Error occurred while deleting product: ", error);
    throw error;
  } finally {
    console.log("Finished deleting product");
  }

  try {
    const responseData: PlaceType = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error occurred while parsing response: ", error);
    throw error;
  }
}


