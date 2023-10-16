"use client"
import Offers from "./components/bestOffers"
import Destinations from "./components/destinations"
import Explore from "./components/explore"
import SearchBar from "./components/searchBar"
import SearchMenu from "./components/searchMenu"





const Home = () => {
  return (
    <div className="w-full h-screen px-5">
        <SearchBar />
        <SearchMenu />
        <Destinations />
        <Offers />
        <Explore />
    </div>
  )
}

export default Home