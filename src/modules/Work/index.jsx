import { styles } from "../../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { projects } from "../../data";
import { useState } from "react";
import { ImageSlider } from "../../components";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  viewImg,
  setIndex,
  darkTheme,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: index * 0.3, duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="h-[420px] w-full rounded-2xl bg-gray-500 p-5 dark:bg-tertiary sm:w-[360px]"
      >
        <div className="relative my-5 h-[160px] w-full ">
          <img
            src={image}
            alt={name}
            className="h-full w-full cursor-pointer   object-contain"
            onClick={() => {
              viewImg(true);
              setIndex(index);
            }}
          />
          <div className="m-3 flex h-fit justify-end ">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black"
            >
              <img
                src={github}
                alt="github"
                className="h-3/4 w-3/4 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold dark:text-white">{name}</h3>
          <p className="mt-2 text-[14px] dark:text-secondary">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = ({ darkTheme }) => {
  const [viewImg, setViewImg] = useState(false);
  const [proIndex, setProIndex] = useState(0);
  return (
    <div id="work" className="  py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] dark:text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      {viewImg ? (
        <ImageSlider
          viewImage={setViewImg}
          // imges={projects[0].name}
          index={proIndex}
        />
      ) : (
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              image={project.images[0]}
              {...project}
              viewImg={setViewImg}
              setIndex={setProIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Work;
