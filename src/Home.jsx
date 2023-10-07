import { useLoaderData } from "react-router-dom";
import Cover from "./Components/Cover/Cover";
import Services from "./Components/Services/Services";
import Events from "./Components/Events/Events";

const Home = () => {
  const events=useLoaderData()

  const handleDetails=(id)=>{
    console.log(id)
  }
  return (
    <div>
      <Cover></Cover>
      <div className="grid grid-cols-4 gap-5 w-11/12 my-10 mx-auto">
        {
          events.map(na=><Events key={na.id} event={na} handleDetails={handleDetails}></Events>)
        }
      </div>
    </div>
  );
};

export default Home;
