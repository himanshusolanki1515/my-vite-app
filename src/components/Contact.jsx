import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaDownload } from "react-icons/fa";
import resumePDF from "../assets/Himanshu Harshvadan Solanki.pdf";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
      content: <span>{CONTACT.address}</span>,
      delay: 0.5,
    },
    {
      icon: <FaPhone className="text-cyan-400 text-xl" />,
      content: (
        <a href={`tel:${CONTACT.phoneNo}`} className="hover:text-cyan-400 transition-colors duration-300">
          {CONTACT.phoneNo}
        </a>
      ),
      delay: 0.7,
    },
    {
      icon: <FaEnvelope className="text-cyan-400 text-xl" />,
      content: (
        <a href={`mailto:${CONTACT.email}`} className="border-b hover:text-cyan-400 transition-colors duration-300">
          {CONTACT.email}
        </a>
      ),
      delay: 0.9,
    },
    {
      icon: <FaDownload className="text-cyan-400 text-xl" />,
      content: (
        <a href={resumePDF} download="Himanshu_Harshvadan_Solanki_Resume.pdf" className="hover:text-cyan-400 transition-colors duration-300 border-b">
          Download Resume
        </a>
      ),
      delay: 1.1,
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-center text-neutral-400 mb-10 max-w-lg mx-auto"
      >
        I'm always excited to collaborate on innovative projects. Let's connect and explore opportunities together!
      </motion.p>
      <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-center md:space-y-0 md:space-x-12">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: item.delay }}
            className="flex items-center space-x-4 tracking-tighter"
          >
            {item.icon}
            {item.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
