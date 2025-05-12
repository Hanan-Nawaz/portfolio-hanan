import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import "./Profile.scss";
import Tilt from "react-parallax-tilt";
import { demo } from "../assets";

const CertCard = ({
  index,
  name,
  description,
  image,
  source_link,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='project-box bg-tertiary p-5 m-2 rounded-2xl sm:w-[330px] w-full h-[530px]'
      >
        <div className='Box1 relative w-full h-[180px]'>
          <img
            src={image}
            alt='project_image'
            className='image w-full h-full rounded-2xl object-cover'
          />

          

          <div className='title absolute inset-0 flex justify-end card-img_hover'>
            <div
              onClick={() => window.open(source_link, "_blank")}
              className='black-gradient w-10 h-10 m-2 rounded-full flex justify-center items-center cursor-pointer'
            >

              <img
                src={demo}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>

          </div>
        </div>

        <div className='content mt-5'>
            <h3 className='text-white font-bold text-[16px] text-justify'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]' style={{ textAlign: 'justify' }}>{description}</p>
        </div>

        
      </Tilt>
  );
};

const Profile = () => {
  return (
    <>
      <motion.div id="cert"
              whileInView={{ opacity: 1, x: 0 }} // animation when in view
              initial={{ opacity: 0, x: -100 }}  // starting position off-screen
              transition={{ duration: 0.5, ease: "easeInOut" }} // smooth transition
              variants={textVariant()} // assuming this returns valid variants
              className={`${styles.sectionSubText} ${styles.sectionHeadText}`} // styling
            >        <p className={`${styles.sectionSubText} `}>Credentials that back my expertise</p>
              <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
            </motion.div>
            
    <div className='my-skills'>
      {profiles.map((profile, index) => (
        <div>
            <CertCard key={`cert-${index}`} index={index} {...profile} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Profile, "");