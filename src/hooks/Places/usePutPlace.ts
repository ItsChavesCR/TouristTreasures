import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetPlaceById } from "./useGetPlaceById";
import { useEffect } from "react";
import { updatePlace } from "../../services/Places";
import { PlaceType } from "../../types/PlaceType";
 

export default function usePutPlace(countryId: string, placeId: string) {
  
    const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { place } = useGetPlaceById(placeId, countryId);
  useEffect(()=>{
    setValue("id", place?.placeId);
    setValue("title", place?.name);
    setValue("price", place?.price);
    setValue("description", place?.description);
    setValue("rating", place?.rating);
 
    setValue("countryId", place?.countryId);
  },[place]);


  const OnSubmit = handleSubmit(async (data) => {
    console.log("Submitted");

    const productData: PlaceType = JSON.parse(JSON.stringify(data));
    
    try {
      await updatePlace(countryId, placeId, productData);
      navigate(/place/${countryId}/${placeId});
    } catch (error) {
      console.error("Error uptating", error);
    }
  });
return {register, OnSubmit};
}