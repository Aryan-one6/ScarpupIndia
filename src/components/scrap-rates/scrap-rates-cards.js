import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const listOneByOne = {
  initial: { opacity: 0, translateX: -50, translateY: -50 },
  animate: (index) => ({
    opacity: 1,
    translateX: 0,
    translateY: 0,
    transition: { duration: 0.3, delay: index * 0.1 },
  }),
};

const ScrapRatesCards = ({ itemsData }) => {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
      <section className="grid lg:grid-cols-5 2xl:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-16 antialiased">
        {itemsData.map((data, index) => (
          <motion.div
            key={index}
            variants={listOneByOne}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className={`flex flex-col shadow-xl mx-auto max-w-sm px-6 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-90 rounded-md w-full ${
              index % 2 == 0
                ? "bg-blue-100 py-12"
                : "mt-0 md:mt-20 bg-purple-100 py-5"
            }`}
          >
            <div className="min-h-62 h-[80px] relative">
              <Image
                fill
                priority
                style={{ objectFit: "contain" }}
                src={data.image}
                alt=""
              />
            </div>
            <h1 className="font-extrabold text-4xl mt-4 mb-4 text-gray-800">
              {index > 9 ? index + "." : "0" + index + "."}
            </h1>
            <h2 className="font-bold mb-5 text-gray-800">{data.title}</h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.rate}</p>
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default ScrapRatesCards;
