import AddButton from "../components/AddButton"
import Footer from "../components/Footer"
import Header from "../components/Header"
import PlacesCard from "../components/PlacesCard"
import CountryProvider from "../context/CountryProvider"


const HomePage = () => {
  return (
      <>
      <CountryProvider>
      <Header/>
      <AddButton/>
      <PlacesCard/>
      <Footer/>
      </CountryProvider>
      </>
  )
}

export default HomePage