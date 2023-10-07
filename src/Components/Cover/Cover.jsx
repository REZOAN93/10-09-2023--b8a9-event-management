import cover1 from "../../assets/cover(1).jpg";
import cover2 from "../../assets/cover(1).jpg";
import cover3 from "../../assets/cover(2).jpg";
import cover4 from "../../assets/cover(3).jpg";

const Cover = () => {
  return (
    <div style={{ height: "500px" }} className="carousel">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          style={{ height: "500px", opacity: 0.3 }}
          src={cover1}
          className=" w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href="#slide4"
            className="text-4xl btn btn-ghost bg-none text-basicColor"
          >
            ❮
          </a>
          <a href="#slide2" className="text-4xl btn btn-ghost text-basicColor">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center w-full text-center p-20 mt-10">
          <div className="flex-row">
            <h1 className=" font-extrabold text-5xl text-basicColor">
              Discover Wellness: Your Ultimate Guide
            </h1>
            <div className="join mt-10 w-full justify-center">
              <input
                className="input input-bordered join-item w-6/12"
                placeholder="Services"
              />
              <button className="btn bg-basicColor text-white font-bold text-xl focus:outline-none border-none join-item rounded-r-full w-2/12">Find</button>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          style={{ height: "500px", opacity: 0.3 }}
          src={cover3}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-4xl btn btn-ghost text-basicColor">
            ❮
          </a>
          <a href="#slide3" className="text-4xl btn btn-ghost text-basicColor">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center left-5 right-5 top-1/2">
          <h1>Hi this is me</h1>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          style={{ height: "500px", opacity: 0.3 }}
          src={cover2}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-4xl btn btn-ghost text-basicColor">
            ❮
          </a>
          <a href="#slide4" className="text-4xl btn btn-ghost text-basicColor">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center left-5 right-5 top-1/2">
          <h1>Hi this is me</h1>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          style={{ height: "500px", opacity: 0.3 }}
          src={cover4}
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-4xl btn btn-ghost text-basicColor">
            ❮
          </a>
          <a href="#slide1" className="text-4xl btn btn-ghost text-basicColor">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-center left-5 right-5 top-1/2">
          <h1>Hi this is me</h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
