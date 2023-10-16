import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import destinations from './data/destinations'
import Image from 'next/image'





const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <div className='mt-5 gap-5'>
            <Slider {...settings}>
                {destinations.map((destination, index) => (
                    <div className="flex items-center bg-white p-2 rounded-xl " key={index}>
                        <div className='w-[8rem] rounded-xl flex float-left'>
                            <Image src={destination.image} width={110} height={100} alt="city_image" className='rounded-xl'/>
                        </div>
                        <div className='flex flex-col -mt-1'>
                            <div className='flex items-center justify-between'>
                                <h1 className='font-semibold'>{destination.city}</h1>
                                <div className='flex items-center gap-1'>
                                    <Image src={destination.starIcon} width={10} height={12} alt='rating_image' className='mb-1'/>
                                    <p className='text-[0.65rem]'>{destination.rating}</p>
                                </div>
                            </div>
                            <p className='text-[0.7rem] text-gray-400'>{destination.description}</p>
                            <p className='font-semibold'>{destination.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
  )
}

export default Carousel