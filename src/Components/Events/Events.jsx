import React from "react";
import './Events.css'

const Events = ({ event,handleDetails }) => {
  const { id, event_type, event_name, date, location, organizer, image_url } =
    event;
  return (
    <div className="flex flex-col">
      <figure className=" h-56 w-full rounded-lg hover:opacity-30">
        <img className=" h-56 w-full rounded-lg" src={image_url} alt="Shoes" />
      </figure>
      <div className="flex-grow py-2 ">
          <p className=" text-basicColor font-bold text-lg ">{event_type}</p>
        </div>
      <div className="">
        
        <h2 className=" text-gray-500 text-base">{event_name}</h2>
        <div className="card-actions mt-1">
          <button onClick={()=>handleDetails(id)} className="btn btn-sm capitalize btn-outline hover:bg-basicColor hover:outline-none hover:border-none border-basicColor text-basicColor text-base ">
            Ticket & Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
