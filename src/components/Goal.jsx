import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import "./goal.css";
import { FiPlus } from "react-icons/fi";
import { ShieldCheck } from "lucide-react";

const goals = [
  {
    icon: "🌱",
    title: "Farm-to-Market Mediation",
    description:
      "Connecting farmers with buyers through a streamlined supply chain.",
  },
  {
    icon: "🚚",
    title: "Logistics and Distribution",
    description:
      "Ensuring timely delivery of fresh produce across various markets.",
  },
  {
    icon: "🌾",
    title: "Farmers’ Support Programs",
    description:
      "Providing resources, training, and tools to boost agricultural productivity such as MBF (Most Beautiful Farmer).",
  },
  {
    icon: "🛡️",
    title: "Food Security Initiatives",
    description:
      "Partnering with stakeholders (Lagos State Ministry Of Agriculture) to combat hunger.",
  },
];

const Goals = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="relative p-6 flex flex-col items-center text-center cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-5xl mb-4">{goal.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-700">{goal.description}</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-slide group-hover:opacity-100">
                <span
                  className={`flex items-center gap-1 text-[#4caf50] font-semibold cursor-pointer  transition-all duration-300 ${
                    hoveredIndex === index ? "trigger-animation" : ""
                  }`}
                >
                  <span className="letter">R</span>
                  <span className="letter">e</span>
                  <span className="letter">a</span>
                  <span className="letter">d</span>
                  <span className="letter"> </span>
                  <span className="letter">M</span>
                  <span className="letter">o</span>
                  <span className="letter">r</span>
                  <span className="letter">e</span>
                  <span className="letter">
                    <FiPlus />{" "}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
