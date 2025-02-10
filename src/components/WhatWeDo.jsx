import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clipart from "../assets/image05.png";
import clipartTwo from "../assets/image06.png";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 15 },
  },
};

const containerVariant = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const WhatWeDo = () => {
  const whatWeDoData = useMemo(
    () => [
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
        description:
          "Building trust through fair pricing and ethical practices.",
        image: "/money.jpg",
      },
    ],
    []
  );

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12 relative">
      <img
        src={clipart}
        alt=""
        className="absolute left-0 top-0 opacity-30"
        loading="lazy"
      />
      <img
        src={clipartTwo}
        alt=""
        className="absolute right-0 bottom-0 opacity-30"
        loading="lazy"
      />

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">Core Values</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {whatWeDoData.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md w-full transition-all"
              variants={fadeInVariant}
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-lg shadow-md w-24 h-24 object-cover"
                loading="lazy"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
