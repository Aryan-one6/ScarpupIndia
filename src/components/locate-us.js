"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

const LocateUs = () => {
  return (
    <section className="bg-[white] relative">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={
          "2xl:max-w-[1280px] w-full mx-auto flex xl:flex-row lg:flex-row md:flex-row 2xl:flex-row xs:flex-col sm:flex-col gap-8 justify-center items-center"
        }
      >
        {/* First */}
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className={
            "md:flex-1 flex flex-row xs:max-sm:flex-col xs:max-sm:px-0 justify-evenly items-center mx-0 px-0 z-20 bg-[transparent]"
          }
        >
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0 z-10">
            <h1 className="h1 text-primary">
              Locate Us
              <br />
            </h1>
            <h3 className="h3 text-black">
              A Tech-Driven{" "}
              <span className="text-primary">Venture Revolutionizing </span>{" "}
              Waste Management.
            </h3>
            <p className="description max-w-[550px] mx-auto xl:mx-0 md-6 xl:mb-10 text-black">
              Use the map on the right to find our current service locations.
              The left side hints at our upcoming branches, demonstrating our
              commitment to expanding our reach, bringing efficient waste
              management and recycling closer to you. Watch out for new
              locations as we strive to make Scrap Up accessible to more
              communities.
            </p>
            
          </div>
        </motion.div>
        {/* Second */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative xl:w-1/2 sm:w-[100vw] md:flex-1 flex md:h-[90vh] flex-row xs:max-sm:px-0 bg-[#fff] sm:h-[60vh] justify-evenly items-center px-8 py-10 z-20 md:flex-2 md:w-1/2 w-[100vw] xs:h-[60vh] box-border flex justify-center items-center"
        >
          <Image
            alt="india map"
            fill
            priority
            style={{ objectFit: "contain" }}
            src={"/images/new-map.png"}
            className="z-0"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
export default LocateUs;
