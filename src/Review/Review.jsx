import success from "../assets/success.png";
import img1 from "../assets/review(1).jpg";
import img2 from "../assets/review(2).jpg";
import img3 from "../assets/review(3).jpg";
import img4 from "../assets/review(4).jpg";

const Review = () => {
  return (
    <div>
      <div style={{ height: "500px" }} className="carousel">
        <div id="slide5" className="carousel-item relative w-full">
          <img style={{ opacity: 0.3 }} src={img1} className=" w-full" />
          <div className=" absolute w-full">
            <figure className="flex justify-center">
              <img className="h-28 flex" src={success} alt="" />
            </figure>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide8"
              className="text-4xl btn btn-outline bg-none hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center w-8/12 text-center lg:top-36 lg:left-44">
            <div className="flex-row space-y-3">
              <h1 className=" font-extrabold text-5xl text-basicColor">
                Health Fair
              </h1>
              <h1 className=" text-4xl text-basicColor font-bold">
                Customer: ABC Healthcare Center
              </h1>
              <p className=" text-lg text-justify text-gray-600">
                ABC Healthcare Center participated in the Health Fair organized
                by the local community. They offered free health check-ups and
                consultations. The event was a tremendous success, reaching over
                500 attendees. Many attendees appreciated the services and
                expertise provided by ABC Healthcare Center, leading to
                increased brand recognition and patient trust.
              </p>
            </div>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img style={{ opacity: 0.3 }} src={img2} className="w-full" />
          <div className=" absolute w-full">
            <figure className="flex justify-center">
              <img className="h-28 flex" src={success} alt="" />
            </figure>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide5"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❮
            </a>
            <a
              href="#slide7"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center w-8/12 text-center lg:top-36 lg:left-44">
            <div className="flex-row space-y-3">
              <h1 className=" font-extrabold text-5xl text-basicColor">
                Yoga and Fitness Retreat
              </h1>
              <h1 className=" text-4xl text-basicColor font-bold">
                Customer: Zen Yoga Studio
              </h1>
              <p className=" text-lg text-justify text-gray-600">
                Zen Yoga Studio organized a rejuvenating Yoga and Fitness
                Retreat in a serene countryside location. Participants enjoyed a
                weekend of yoga sessions, meditation, and outdoor activities.
                The retreat received rave reviews from attendees, praising the
                expert instructors and the peaceful ambiance. Many attendees
                expressed interest in joining regular classes at Zen Yoga Studio
                after the retreat.
              </p>
            </div>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img style={{ opacity: 0.3 }} src={img3} className="w-full" />
          <div className=" absolute w-full">
            <figure className="flex justify-center">
              <img className="h-28 flex" src={success} alt="" />
            </figure>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide6"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❮
            </a>
            <a
              href="#slide8"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center w-8/12 text-center lg:top-36 lg:left-44">
            <div className="flex-row space-y-3">
              <h1 className=" font-extrabold text-5xl text-basicColor">
                Wellness Expo
              </h1>
              <h1 className=" text-4xl text-basicColor font-bold">
                Customer: Healthy Living Hub
              </h1>
              <p className=" text-lg text-justify text-gray-600">
                Healthy Living Hub sponsored a Wellness Expo in collaboration
                with local fitness experts and nutritionists. They showcased a
                wide range of health and wellness products. The expo attracted
                health enthusiasts and individuals seeking a healthier
                lifestyle. Healthy Living Hub received positive feedback for
                their product quality and informative workshops. Many attendees
                made purchases and signed up for their wellness programs,
                leading to a boost in sales and brand loyalty.
              </p>
            </div>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <img style={{ opacity: 0.5 }} src={img4} className="w-full" />
          <div className=" absolute w-full">
            <figure className="flex justify-center">
              <img className="h-28 flex" src={success} alt="" />
            </figure>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide7"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="text-4xl btn btn-outline hover:bg-basicColor hover:border-none text-basicColor"
            >
              ❯
            </a>
          </div>
          <div className="absolute flex justify-center w-8/12 text-center lg:top-36 lg:left-44">
            <div className="flex-row space-y-3">
              <h1 className=" font-extrabold text-5xl text-basicColor">
                Fitness Bootcamp
              </h1>
              <h1 className=" text-4xl text-basicColor font-bold">
                Customer: FitLife Gym
              </h1>
              <p className=" text-lg text-justify text-gray-600">
                FitLife Gym organized an intensive Fitness Bootcamp over a
                month, focusing on high-intensity workouts and personalized
                training. Participants experienced significant fitness
                transformations and improvements in their overall health.
                FitLife Gym's expert trainers and motivating atmosphere were
                highly praised. Several participants achieved their fitness
                goals, including weight loss and muscle gain, leading to a surge
                in gym memberships and referrals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
