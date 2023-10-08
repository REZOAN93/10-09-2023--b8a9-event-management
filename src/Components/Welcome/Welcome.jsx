import img1 from '../../assets/girl-1.png'
import { BsFillBellFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
const Welcome = () => {
  return (
    <div className='grid grid-cols-3 w-11/12 mx-auto py-10'>
      <div className=' col-span-2 my-20 space-y-8'>
        <h1 className=' text-4xl font-bold'>Welcome to <span className=' text-basicColor'>Health & Wellness Events</span></h1>
        <p className=' text-justify text-lg w-10/12 text-gray-600'>
          Welcome to the world of health and wellness events, where the pursuit
          of a healthier, happier life takes center stage. In our fast-paced
          lives, taking care of our well-being often takes a backseat. That’s
          where health fairs, yoga and fitness retreats, and wellness expos come
          in – as guiding lights on the path to a better lifestyle
        </p>
        <div className='grid grid-cols-3 w-10/12 gap-2 font-bold '>
            <div className='flex items-center gap-3'>
                <div className=' p-5 w-20 h-20 flex justify-center items-center text-white text-5xl bg-basicColor rounded-full'><BsFillBellFill/></div>
                <p className=' text-basicColor'>BALANCE BODY AND MIND</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className=' p-5 w-20 h-20 flex justify-center items-center text-white text-3xl bg-basicColor rounded-full'><FaShoppingBag/></div>
                <p className=' text-basicColor'>HEALTHY DAILY LIFE</p>
            </div>
            <div className='flex items-center gap-3'>
                <div className=' p-5 w-20 h-20 flex justify-center items-center text-white text-5xl bg-basicColor rounded-full'><GiTrophyCup/></div>
                <p className=' text-basicColor'> MONTHLY CHALLENGE </p>
            </div>
        </div>
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
