import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { styles } from "../../styles";
// import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //5ZTIJxNfmzVKF86-i
    //template_lsqcouc
    //service_6l968yn

    emailjs
      .send(
        "service_6l968yn",
        "template_lsqcouc",
        {
          from_name: form.name,
          to_name: "Sandun",
          from_email: form.email,
          to_email: "st.udawatte@gmail.com",
          message: form.message,
        },
        "5ZTIJxNfmzVKF86-i"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <div id="contact">
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
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
      </motion.div>
      <div className="flex w-full items-center justify-between ">
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex w-[50%] flex-col gap-2 py-6"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="rounded-lg border-none
              bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="rounded-lg border-none
              bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="rounded-lg border-none
              bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
            />
          </label>

          <button
            type="submit"
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none hover:bg-tertiary/80"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.form>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex w-[35%] flex-col gap-4   text-white"
        >
          <span className=" font-poppings text-[28px] font-semibold">
            Sandun Thisara
          </span>

          <p className="text-[20px]">
            12020,
            <br /> Vilpatha,
            <br /> Dodangoda, <br />
            Kalutara,
            <br /> Sri Lanka.
          </p>
          <a href="tel:+94716547268" className="text-[20px] font-semibold">
            +94716547268
          </a>
          <div>
            <span className="text-[24px]">See me on</span>
            <div className="ml-4 mt-4 flex gap-6 text-[32px] text-white">
              <a
                href="http://www.linkedin.com/in/sandunthisara"
                target="_blank"
                className="ml-[5px] font-[500] text-black no-underline"
              >
                <FaLinkedin color="white" />
              </a>
              <a
                href="https://github.com/Studawatta"
                target="_blank"
                className="ml-[5px] font-[500] text-black no-underline"
              >
                <AiFillGithub color="white" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
