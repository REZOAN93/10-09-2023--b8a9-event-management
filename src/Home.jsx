import { useLoaderData } from "react-router-dom";
import Cover from "./Components/Cover/Cover";
import Events from "./Components/Events/Events";
import Footer from "./Components/Shared/Footer";
import Welcome from "./Components/Welcome/Welcome";
import Review from "./Review/Review";

const Home = () => {
  const events = useLoaderData();

  return (
    <div>
      <Cover></Cover>
      <Welcome></Welcome>
      <div className="w-11/12 my-10 mx-auto">
        <h1 data-aos="fade-up-right" className="my-8 text-2xl font-bold text-center text-basicColor">
          Our Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 ">
          {events.map((na) => (
            <Events key={na.id} event={na}></Events>
          ))}
        </div>
      </div>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
};

export default Home;
