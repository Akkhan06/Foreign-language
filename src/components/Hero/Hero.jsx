import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS in the component
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="carousel w-full md:h-[600px] rounded-xl "
    >
      <div id="slide1" className="carousel-item relative w-full rounded-xl ">
        <img
          data-aos="fade-up-right"
          src="https://img.freepik.com/free-photo/pleasant-looking-afro-american-woman-holds-notepads-papers-studies-college-glad-finish-studying_273609-26983.jpg?w=740&t=st=1686141594~exp=1686142194~hmac=7eea181649d223512db8c977c70ae62c21bf29923f2807b5c81f7cee12d44eb9"
          className="w-full"
        />
        <div className="absolute md:w-3/4 mx-auto text-white h-full flex items-center right-0 left-0 ">
          <div className="md:w-1/3 ml-10">
            <h2 className="text-2xl md:text-5xl font-bold">
            Unlock Your Multilingual Potential
            </h2>
            <p className="py-4 w-2/3 md:w-auto">
            Discover the keys to unlocking your innate ability to speak multiple languages fluently.
            </p>

            <button className="btn btn-warning text-white">
              Discover More
            </button>
          </div>
        </div>

        <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn md:btn-circle btn-sm">
            ❮
          </a>
          <a href="#slide2" className="btn md:btn-circle btn-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/horizontal-shot-pretty-dark-skinned-woman-with-afro-hairstyle-has-broad-smile-white-teeth-shows-something-nice-friend-points-upper-right-corner-stands-against-wall_273609-16442.jpg?t=st=1686114476~exp=1686115076~hmac=fa2417f713993585050fd94f2d9fcfbc3cdef4637c5190a5b72e0170e5b046c8"
          className="w-full"
        />
        <div className="absolute ml-10 md:w-3/4 mx-auto text-white h-full flex items-center justify-end right-0 left-0 ">
          <div className="w-2/3 md:w-1/3 ml-10">
            <h2 className=" md:text-6xl font-bold">
            Embrace the Art of Language Learning
            </h2>
            <p className="py-4 md:w-auto">
            Embrace the beauty of language learning as you embark on a transformative journey of linguistic growth.
            </p>

            <button className="btn btn-warning text-white">
              Discover More
            </button>
          </div>
        </div>

        <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn md:btn-circle btn-sm">
            ❮
          </a>
          <a href="#slide3" className="btn md:btn-circle btn-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/assortment-teacher-s-day-elements_23-2149044959.jpg?w=826&t=st=1686141909~exp=1686142509~hmac=8927226903a7e8e72d21e04f72597fb625774c8f49f384d0b4172792e0f3b093"
          className="w-full"
        />
        <div className="absolute ml-10 md:w-3/4 mx-auto text-white h-full flex items-center justify-end right-0 left-0 ">
          <div className="w-2/3 md:w-1/3 ml-10">
            <h2 className="text-2xl md:text-6xl font-bold">
            Your Passport to Global Communication
            </h2>
            <p className="py-4 md:w-auto">
            Open the gateway to cross-cultural understanding with your personal passport to seamless global communication.
            </p>

            <button className="btn btn-warning text-white">
              Discover More
            </button>
          </div>
        </div>

        <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn md:btn-circle btn-sm">
            ❮
          </a>
          <a href="#slide4" className="btn md:btn-circle btn-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-xl">
        <img
          src="https://img.freepik.com/free-photo/front-view-stacked-books-earth-globe-open-book-pencils-education-day_23-2149241018.jpg?w=740&t=st=1686142185~exp=1686142785~hmac=fe28b7acbb2afc6b54d0df51fdef6c56067bc4afbf1955599fd39589d929d85a"
          className="w-full"
        />
        <div className="absolute md:w-3/4 mx-auto text-black h-full flex items-center right-0 left-0 ">
          <div className="md:w-1/3 ml-10">
            <h2 className="text-2xl md:text-6xl  font-bold">
            Where Languages Come Alive
            </h2>
            <p className="py-4 text-white w-2/3 md:w-auto">
            Immerse yourself in a vibrant language-learning experience where languages come alive through interactive and dynamic exploration
            </p>

            <button className="btn btn-warning text-white">
              Discover More
            </button>
          </div>
        </div>

        <div className="absolute flex justify-between  md:px-7 transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn md:btn-circle btn-sm">
            ❮
          </a>
          <a href="#slide1" className="btn md:btn-circle btn-sm">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
