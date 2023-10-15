import {CiSearch} from "react-icons/ci"
import {IoNotificationsOutline} from "react-icons/io5"




const SearchBar = () => {

    const currentDate = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      };
      
    const localizedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="bg-white py-3 pl-6 pr-10 flex justify-between rounded-xl items-center">
        <div className="text-xs text-gray-500 flex items-center">
            <span className="absolute pl-2 text-sm">
                <CiSearch />
            </span>
            <input type="text" placeholder="Search any thing..." className="outline-none border border-gray-300 py-2 px-7 rounded-lg"></input>
        </div>
        <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
                {localizedDate}
            </span>
            <span className="flex items-center gap-1">
                <span className="bg-red-400 text-white px-1 rounded-full text-[0.7rem] -mt-5">3</span>
                <span className=" p-1 rounded-[0.6rem] border border-gray-300 text-lg">
                    <IoNotificationsOutline />
                </span>
            </span>
        </div>
    </div>
  )
}

export default SearchBar