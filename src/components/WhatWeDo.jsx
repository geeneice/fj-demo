import React from "react";
import { motion } from "framer-motion";
import clipart from "../assets/image05.png";
import clipartTwo from "../assets/image06.png";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});

const whatWeDoData = [
  {
    title: "Sustainability",
    description:
      "Committed to eco-friendly practices that benefit the environment and future generations.",
    image: "/fruit.jpg",
  },
  {
    title: "Empowerment",
    description:
      "Supporting local farmers to grow their businesses and achieve financial independence.",
    image: "/supply.webp",
  },
  {
    title: "Accessibility",
    description:
      "Ensuring every consumer has access to affordable and nutritious food.",
    image: "/access.webp",
  },
  {
    title: "Innovation",
    description:
      "Ensuring every consumer has access to affordable and nutritious food.",
    image: "/farmboy.jpg",
  },
  {
    title: "Transparency",
    description: "Building trust through fair pricing and ethical practices.",
    image: "/money.jpg",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12 relative">
      <img src={clipart} alt="" className="absolute left-0 top-0" />
      <img src={clipartTwo} alt="" className="absolute right-0 bottom-0" />
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-16">Core Values</h2>

        <div className="grid md:grid-cols-2 gap-16 place-items-center ">
          {whatWeDoData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-8 bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl z-20"
              variants={fadeInVariant(index % 2 === 0 ? "right" : "left")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="w-2/3 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
