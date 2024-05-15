import { useNavigate } from "react-router-dom";
import React from "react";
import { deletePlace } from "../services/Places";

export default function DeletePlaceModal({  countryId, placeId}: {

  countryId: string;
  placeId: string;
}) {

  const navigate = useNavigate()

  const [viewModal, setViewModal] = React.useState(false);

  const ModalPresentTrue = () =>{
    setViewModal(true)
  }

  const ModalPresentFalse = () =>{
    setViewModal(false)
  }

  const handleConfirmDelete = async () => {
    console.log("Submit delete place")

    try {
      await deletePlace( countryId, placeId)
      setViewModal(true)
      navigate('/')
    } catch (error) {
      console.error('Error deleting place:', error)
    }
  }
  return (
    <>
      <button onClick={ModalPresentTrue} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" type="button">
        Delete
      </button>
      {viewModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Are you sure you want to delete this place?
                  </p>
                </div>
                <div className="flex items-center p-6 border-t border-solid border-blueGray-200 rounded-b justify-center">
                  <button onClick={ModalPresentFalse} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                    Close
                  </button>
                  <button onClick={handleConfirmDelete} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900" type="button">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}