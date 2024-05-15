import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useGetPlaceById } from "./useGetPlaceById";
import { useEffect } from "react";
import { updatePlace } from "../../services/Places";
import { PlaceType } from "../../types/PlaceType";
 
export default function usePutPlace(countryId: number, placeId: number) {

  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { place } = useGetPlaceById( placeId, countryId);

  useEffect(() => {
    setValue("placeId", place?.placeId);
    setValue("name", place?.name);
    setValue("price", place?.price);
    setValue("description", place?.description);
    setValue("rating", place?.rating);
    setValue("image", place?.image);
    setValue("countryId", place?.countryId);
  }, [place, setValue]);

  const OnSubmit = handleSubmit(async (data) => {
    console.log("Submitted");
    const placeData: PlaceType = JSON.parse(JSON.stringify(data));
    
    try {
      await updatePlace( countryId, placeId, placeData );
      navigate(`/places/${countryId}/${placeId}`);
    } catch (error) {
      console.error("Error uptating product:", error);
    }
  });

  return { register, OnSubmit };
}