import explore from "./data/explore"
import Image from "next/image"
import {CiLocationOn} from 'react-icons/ci'






const Explore = () => {
  return (
    <div className="mt-5">
        <div className="mb-5">
            <h1 className="text-blue-950">Explore France</h1>
        </div>
        <div className="flex gap-5">
          {explore.map((place, index) => (
            <div className="bg-white px-1 pt-1 rounded-xl flex" key={index}>
              <div className="w-[8rem] rounded-xl">
                <Image src={place.image} alt="" width={120} height={50} className="rounded-xl" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-semibold text-[0.7rem]">{place.place}</h2>
                <div className="flex items-center text-gray-400 text-[0.6rem]">
                  <span className="">
                    <CiLocationOn/>
                    <p className="">{place.location}</p>
                  </span>
                  <span className="">
                    <p className="">{place.pric}</p>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Explore