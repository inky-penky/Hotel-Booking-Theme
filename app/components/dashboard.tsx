import Link from 'next/link'

import {AiTwotoneHome} from 'react-icons/ai'
import {CiGrid41} from 'react-icons/ci'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {GrFavorite} from 'react-icons/gr'
import {RiSettingsLine} from 'react-icons/ri'
import {MdOutlineNavigateNext} from 'react-icons/md'



const Dashboard = () => {

  return (
    <div className='text-blue-950 text-xs flex flex-col gap-36'>
        <div className='gap-5 flex flex-col relative'>
            <span className='w-1 h-1 rounded-full bg-blue-950 absolute top-2 -left-2'></span>
            <Link href="/" className='flex items-center gap-5'><AiTwotoneHome size={16} />Dashboard</Link>
            <Link href="/explore-city" className='flex items-center gap-5'><CiGrid41 size={16} />Explore City</Link>
            <Link href="/ticket" className='flex items-center gap-5'><HiOutlineEnvelope size={16} />Ticket</Link>
            <Link href="/favorite" className='flex items-center gap-5'><GrFavorite size={16} />Favorites</Link>
            <Link href="/setting" className='flex items-center  gap-5'><RiSettingsLine size={16} />Setting</Link>
        </div>
        <div className='flex gap-5'>
            <span className='rounded-full border border-blue-950 items-center flex'><MdOutlineNavigateNext /></span>
            <button className="">Logout</button>
        </div>
    </div>
    
  )
}

export default Dashboard