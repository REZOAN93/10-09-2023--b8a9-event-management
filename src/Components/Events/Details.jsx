import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Details = () => {
  const events = useLoaderData();
  const { id } = useParams();
  const idNum = parseInt(id);

  const individualEvents = events.find((na) => na.id === idNum);
  const {
    event_name,
    date,
    location,
    organizer,
    image_url,
    description,
  } = individualEvents;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 max-w-6xl mx-auto gap-5 px-5 lg:px-0 py-5">
      <div className="col-span-2">
        <div className="border p-2 rounded-lg bg-slate-50 my-2 space-y-1 ">
          <h1 className="text-basicColor">
            <span className=" font-bold">Date:</span> {date}
          </h1>

          <h1 className=" text-basicColor">
            <span className="font-bold ">Organizer:</span>
            {organizer}
          </h1>
        </div>
        <div className=" space-y-4 mt-10">
          <h2 className=" text-2xl font-bold text-basicColor">{event_name}</h2>
          <p className=" text-base text-justify text-gray-500">{description}</p>
        </div>
      </div>
      <div className="mx-auto my-2 pb-20 lg:px-5 md:px-0 col-span-5">
        <div className="card space-y-3">
          <figure className="w-full h-84 rounded-lg ">
            <img
              className="w-full h-84 rounded-lg "
              src={image_url}
              alt="Shoes"
            />
          </figure>
          <div className="flex gap-2 items-center text-sm justify-end">
            <FaLocationDot />
            <h1 className=" font-bold">{location}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
