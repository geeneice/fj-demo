import React from "react";
import Header from "../components/Header";
import ScrollDownButton from "../components/ScrollDown";
import Footer from "../components/Footer";
import "./Home.css";
import fruits from "../assets/fruits.jpeg";
import meats from "../assets/meats.jpeg";
import dairy from "../assets/organic-dairy.jpg";
import grains from "../assets/grains.webp";
import { RiArrowRightSLine } from "react-icons/ri";
import WhatWeDo from "../components/WhatWeDo";
import Goals from "../components/Goal";

const Home = () => {
  return (
    <>
      <div className="relative w-full lg:h-screen max-sm:h-[72vh]">
        <Header />
        <img
          src="/farmjunction.jpg"
          alt="Background"
          className="zoom-background"
        />

        <div className="flex flex-col items-center justify-center h-full text-center text-white relative">
          <h2 className="md:text-3xl max-sm:text-[20px] max-sm:mb-56 font-semibold md:mb-64 text-[#123524]">
            From Farmers to Your Table, Fresh and <br /> Natural—Bringing You
            the Best
            <br />
            of the Harvest, Straight from the Source
          </h2>
          <span className="bg-[#4caf50] w-[136px] h-[4px] absolute top-56 md:top-72"></span>
          <p className="text-[40px] dancing-script">What We Offer</p>

          {/* Product Boxes */}
        </div>

        <ScrollDownButton />
      </div>

      <div className="md:flex md:absolute md:top-[84%] max-sm:mt-4 sm:mt-4 justify-center w-full gap-6 text-[#EFE3C2]">
        <div className="product-box bg-[#123524] p-8 w-60 h-80 flex flex-col items-center">
          <h3 className="text-center text-xl font-semibold mb-4">Fruits</h3>
          <img
            src={fruits}
            alt="Fruits"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <p className="text-center mt-4">
            Apples, bananas, oranges, mangoes, strawberries, pineapples,
            papayas, etc.
          </p>
        </div>
        <div className="product-box bg-[#123524] p-8 w-60 h-80 flex flex-col items-center">
          <h3 className="text-center text-xl font-semibold mb-4">Grains</h3>
          <img
            src={grains}
            alt="Grains"
            className="w-full h-28 object-cover rounded-2xl mb-4"
          />
          <p className="text-center mt-4">
            Rice including varieties like jasmine, basmati, long grain, short
            grain, etc.
          </p>
        </div>
        <div className="product-box bg-[#123524] p-8 w-60 h-80 flex flex-col items-center">
          <h3 className="text-center text-xl font-semibold mb-4">
            Meat and Poultry
          </h3>
          <img
            src={meats}
            alt="Meat and Poultry"
            className="w-full h-40 object-cover rounded-2xl mb-4"
          />
          <p className="text-center mt-4">
            Fresh cuts of meat such as beef, lamb, pork, chicken, and sometimes
            specialty meats like goat or turkey.
          </p>
        </div>
        <div className="product-box bg-[#123524] p-8 w-60 h-80 flex flex-col items-center">
          <h3 className="text-center text-xl font-semibold mb-4">Dairy</h3>
          <img
            src={dairy}
            alt="Dairy"
            className="w-full h-28 object-cover rounded-2xl mb-4"
          />
          <p className="text-center mt-4">Milk, cheese, butter, yogurt, etc.</p>
        </div>
      </div>

      <div className="md:mt-56 max-sm:mt-20 sm:mt-20 max-sm:px-2 flex flex-row place-items-center justify-center gap-8 py-5">
        <h1 className="md:text-[32px] max-sm:text-[20px] sm:text-[20px]">
          Discover More about Our Products
        </h1>
        <button className="md:px-8 max-sm:px-6 sm:px-6 py-2 bg-[#4caf50] flex place-items-center max-sm:text-[10px] sm:text-[10px] md:text-[13px] hover:bg-[#4caf4fcb] cursor-pointer">
          Read more <RiArrowRightSLine />
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 py-5">
        <div className="my-auto text-center">
          <h2 className="font-extrabold text-5xl">Vision</h2>
          <p className="dancing-script text-[#EFE3C2] text-[16px] font-bold">
            Man Must Eat
          </p>
        </div>

        <div className="w-full md:w-[48%] bg-[#3E7B27] py-8 px-8 text-white">
          <p className="font-bold text-xl">
            Farm Junction Nigeria Limited is a pioneering agricultural company
            dedicated to bridging the gap between farmers and consumers. Guided
            by our vision—"Man Must Eat"—we are committed to ensuring that
            fresh, affordable food reaches every home in Nigeria. By
            streamlining the supply chain and promoting sustainable agricultural
            practices, we empower farmers, reduce inefficiencies, and enhance
            food security. As part of a dynamic network that includes Demiller
            Farms and Demiller Industries Limited, we work tirelessly to make
            food availability and affordability a reality for all.
          </p>
        </div>
      </div>

      <WhatWeDo />
      <Goals />

      <Footer />
    </>
  );
};

export default Home;
