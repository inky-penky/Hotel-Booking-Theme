import Image from "next/image"
import Couch1 from "@/public/images/couch_1-min.jpg"
import {CiLocationOn} from 'react-icons/ci'
import {BsCardChecklist} from 'react-icons/bs'
import {CiUser} from 'react-icons/ci'




const SearchMenu = () => {
  return (
    <div className="flex flex-col relative">
        <div className="relative h-[8rem] rounded-3xl mt-5">
            <Image src={Couch1} alt="couch" layout="fill" className="rounded-3xl object-cover"/>
        </div>
        <div className="bg-white rounded-2xl text-gray-500 px-4 py-2 flex justify-center absolute mt-[8rem] right-[3.8rem]">
          <div className="flex items-center select-md">
            <span className="absolute"><CiLocationOn/></span>
            <select className="pr-[4.5rem] pl-5 bg-transparent py-2 outline-none">
              <option selected>Where Are You Going?</option>
            </select>
          </div>
          <div className="flex items-center select-md ">
            <span className="absolute ml-6"><BsCardChecklist/></span>
            <select className="border-l-2 pr-[4.5rem] pl-11 bg-transparent py-2 outline-none">
              <option selected>Check-in Date</option>
            </select>
          </div>
          <div className="flex items-center select-md text-gray-800">
            <span className="absolute ml-6"><CiUser/></span>
            <select className="border-l-2 pr-[4.5rem] pl-10 bg-transparent py-2 outline-none">
              <option selected>3 adults</option>
            </select>
          </div>
          <button className="btn bg-blue-950 text-white capitalize px-8 py-0">Search</button>
        </div>
    </div>
  )
}

export default SearchMenu