import { motion } from "framer-motion";
import { styles } from "../../styles";
import { technologies } from "../../data";
import { BallCanvas } from "../../assets";

const About = () => {
  return (
    <div id="about" className=" flex h-fit flex-col justify-center py-20 ">
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="mb-4 mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and framworks like React, Node js, Express js. I'm a quick
        learner and collaborate closely with clients to create efficient,
        scalable, and user-friendly solutoins that solve real-world problems.
        Let's work together to bring your ideas to life.
      </motion.p>
      <div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={styles.sectionHeadText}
        >
          Technologies
        </motion.h2>
        <div className=" mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className=" flex flex-row flex-wrap justify-center gap-10"
          >
            {technologies.map((technology) => (
              <div className="h-28 w-28 " key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
