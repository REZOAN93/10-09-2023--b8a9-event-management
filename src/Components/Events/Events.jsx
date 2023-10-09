import React, { useEffect } from "react";
import "./Events.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Events = ({ event }) => {
  const { id, event_type, event_name, date, location, organizer, image_url,fee } =event;
  useEffect(() => {
    AOS.init({
      duration: 1200
     });
  }, [])
  return (
    <div data-aos="fade-left"  className="flex flex-col">
      <figure data-aos="zoom-in" className=" h-56 w-full rounded-lg hover:opacity-30">
        <img  className=" h-56 w-full rounded-lg" src={image_url} alt="Shoes" />
      </figure>
      <div className="flex-grow py-2 ">
        <p className=" text-basicColor font-bold text-lg ">{event_type}</p>
      </div>
      <div className="">
        <h2 className=" text-gray-500 text-base flex-grow">{event_name}</h2>

        <div className="card-actions flex items-center justify-stretch mt-1">
          <Link to={`/events/${id}`}>
            <button className="btn btn-sm capitalize btn-outline hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base ">
              {" "}
              Ticket & Details
            </button>
          </Link>
          <h2 className=" font-bold text-white bg-basicColor px-2 rounded-lg" >Price:${fee}</h2>
        </div>
      </div>
    </div>
  );
};

export default Events;
