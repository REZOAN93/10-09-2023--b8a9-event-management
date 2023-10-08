import React from "react";
import img1 from "../../assets/review(3).jpg";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-10/12 mx-auto my-8 gap-4">
        <div className="h-full">
          <div className="avatar">
            <div className="w-full mask mask-hexagon">
              <img src={img1} />
            </div>
          </div>
        </div>
        <div className=" col-span-2 space-y-4">
          <h1 className=" text-4xl font-bold">
            This Is Our Space To Introduce Rezoan
          </h1>
          <p className=" text-gray-500 text-justify">
            Welcome to the world of health and wellness events, where the
            pursuit of a healthier, happier life takes center stage. In our
            fast-paced lives, taking care of our well-being often takes a
            backseat. That’s where health fairs, yoga and fitness retreats, and
            wellness expos come in – as guiding lights on the path to a better
            lifestyle.
          </p>
          <p>
            <span className=" font-bold text-basicColor">Health Fairs:</span>{" "}
            These lively gatherings bring communities together to learn, share,
            and explore various aspects of health. From free health screenings
            and informative workshops to interactive sessions with healthcare
            professionals, health fairs empower attendees with valuable
            knowledge about their well-being. It’s a space where questions find
            answers and where proactive steps towards a healthier life begin.
          </p>
          <p>
            <span className=" font-bold  text-basicColor">
              Yoga and Fitness Retreats:
            </span>
            Imagine escaping the hustle and bustle of daily life to immerse
            yourself in a serene environment, surrounded by nature. That’s the
            essence of yoga and fitness retreats. These retreats offer more than
            just physical exercises; they provide a holistic approach to
            wellness. Through yoga, meditation, nutritious meals, and
            rejuvenating activities, attendees can reconnect with their bodies
            and minds, fostering a deep sense of relaxation and inner peace.
          </p>
          <p>
            <span className=" font-bold  text-basicColor">
              {" "}
              Wellness Expos:
            </span>
            In the world of wellness expos, the latest advancements in the
            health industry take the spotlight. These events serve as platforms
            for experts, innovators, and enthusiasts to come together. Attendees
            can explore new health technologies, learn about alternative
            therapies, and discover the latest trends in nutrition and fitness.
            Wellness expos are not just informative; they inspire attendees to
            adopt healthier habits and make informed choices about their
            well-being.
          </p>
          <p>
            These events aren’t merely gatherings; they are transformative
            experiences. They offer practical tools, inspiration, and a
            supportive community that can kick-start your journey towards a
            healthier lifestyle. Whether you’re looking to manage stress,
            improve your physical fitness, or simply enhance your overall
            quality of life, these events have something to offer everyone. Join
            us on this enriching journey. Explore the world of health fairs,
            yoga and fitness retreats, and wellness expos. Discover how these
            events can positively impact your life, providing you with the
            knowledge and motivation to make lasting, positive changes. Embrace
            the opportunity to invest in your well-being – because a healthier
            you starts here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
