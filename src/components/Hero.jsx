import React from "react";
import { assets } from "../assets/assets";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IoEarth } from "react-icons/io5";
import { LiaSearchLocationSolid } from "react-icons/lia";
import { GiGlobe } from "react-icons/gi";
import LandingCard from "./LandingCard";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero relative h-full w-full bg-black/70 justify-center items-center object-cover ">
      <Navbar />
      <img
        className=" h-screen w-screen opacity-50 blur-sm"
        src={assets.map_bg}
        alt=""
      />

      <div className="landing absolute top-[25%] flex flex-col items-center gap-10  ">
        <div className="content w-full text-center flex flex-col items-center gap-6">
          <h1 className="text-6xl">Live Flight Tracking Network</h1>
          <p className="text-xl w-[70%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            architecto voluptatem dicta sit optio deleniti natus tempora vero
            modi, reiciendis neque quo minus.
          </p>
        </div>
        <Link to="/main-page">
          <button className="flex items-center gap-2 text-2xl font-medium bg-black/80 text-white/70 px-4 py-2 rounded-md duration-300 hover:scale-105">
            Get Started <MdOutlineRocketLaunch />
          </button>
        </Link>

        <div className="content_card flex gap-10 mt-14">
          <LandingCard
            icon={<IoEarth size={120} />}
            title={"Global receiver network"}
            desc={"We collect and process our own live flight data"}
          />
          <LandingCard
            icon={<LiaSearchLocationSolid size={120} />}
            title={"Complex algorithm checks"}
            desc={"Rigorous checks are carried out using our proven technology"}
          />
          <LandingCard
            icon={<GiGlobe size={120} />}
            title={"Trusted global data"}
            desc={
              "Providing users with a true picture of air traffic around the world"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
