import AddButton from "../components/AddButton"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PlacesCard from "../components/PlacesCard"
import SearchPlaces from "../components/SearchPlaces"
import { CountryProvider } from "../context/CountryProvider"



const HomePage = () => {
  return (
      <>
      <CountryProvider>
      <Header/>
     <SearchPlaces/>
      <AddButton/>
      <PlacesCard/>
      <Footer/>
      </CountryProvider>
      </>
  )
}

export default HomePage