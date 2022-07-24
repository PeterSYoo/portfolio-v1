import './Contact.scss';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ width: 0 }}
      animate={{ width: '80vw' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.01 } }}
    >
      <section className="contact-content">
        <h1>Contact</h1>
      </section>
    </motion.div>
  );
};

export default Contact;
