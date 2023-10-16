import {MdOutlineNavigateNext} from 'react-icons/md'
import {GrFormPrevious} from 'react-icons/gr'
import Carousel from './carousel'




const Destinations = () => {
      
  return (
    <div className=' mt-[4rem]'>
        <div className="flex items-center justify-between">
            <h1 className="">Trending destinations</h1>
            <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg border"><GrFormPrevious/></span>
                <span className="bg-blue-950 text-white p-1 rounded-lg"><MdOutlineNavigateNext/></span>
            </div>
        </div>
        <Carousel />
    </div>
  )
}


export default Destinations 

