import Image from "next/image"
import Avatar from "@/public/images/ilia jan.jpg"
import Dashboard from "./dashboard"
import Edit from "@/public/images/edit.png"




const SideNav = () => {
  return (
    <div className='flex flex-col py-6 px-10 gap-20 bg-white w-1/6 rounded-3xl'>
        <div className="flex flex-col items-center gap-5 text-blue-950">
            <h1 className="text-[1.1rem] font-bold">MimaBooking</h1>
            <div className="avatar rounded-full border border-blue-950">
                <div className="rounded-full border-4 border-gray-200 w-[4rem] ">
                  <Image src={Avatar} alt="avatar" />
                  <span className="bg-blue-950 rounded-full w-6 p-1 absolute -bottom-2 left-5">
                    <Image src={Edit} alt="edit_icon" />
                  </span>
                </div>
            </div>
            <p className="font-light text-sm">ilia jan</p>
        </div>
        <Dashboard />

    </div>
  )
}

export default SideNav