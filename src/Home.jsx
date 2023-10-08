import { useLoaderData } from "react-router-dom";
import Cover from "./Components/Cover/Cover";
import Events from "./Components/Events/Events";
import Footer from "./Components/Shared/Footer";

const Home = () => {
  const events=useLoaderData()

  return (
    <div>
      <Cover></Cover>
      <div className="grid grid-cols-4 gap-5 w-11/12 my-10 mx-auto">
        {
          events.map(na=><Events key={na.id} event={na}></Events>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
