import bestOffers from "./data/offers"
import Image from "next/image"
import {CiLocationOn} from 'react-icons/ci'
import {GrFavorite} from 'react-icons/gr'






const Offers = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center text-blue-950 justify-between pb-5">
        <h1 className="">Best Offers</h1>
        <button className="bg-transparent outline-none text-[0.65rem]">View All</button>
      </div>
      <div className="flex justify-between">
        {bestOffers.map((offer, index) => (
          <div className="p-1 bg-white rounded-lg" key={index}>
            <div className="w-[12rem]">
              <Image src={offer.image} alt="apartments" width={200} height={50} className="rounded-xl object-fill" />
            </div>
            <div className="flex flex-col pt-3">
              <h2 className="text-xs font-semibold">{offer.apartment}</h2>
              <span className="text-[0.6rem] flex items-center text-gray-400 my-1">
                <CiLocationOn/>
                <p className="">{offer.location}</p>
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <p className="font-semibold">{offer.price}<span className="text-gray-400 text-[0.7rem] font-light">/ night</span></p>
              <span className="p-1 rounded-lg border border-gray-300"><GrFavorite /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Offers