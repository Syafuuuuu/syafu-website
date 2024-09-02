import { motion } from "framer-motion";

const RAND = (min: any, max: any) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const BlockReveal = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: RAND(-30, 30), x: RAND(-20, 20) }} // Starting state of animation
      animate={{ opacity: 1, y: 0, x: 0 }} // Ending state of animation
      exit={{ opacity: 0, y: RAND(-30, 30), x: RAND(-20, 20) }} // Exit state for animation
      transition={{ duration: RAND(1.0, 3.0) }} // Animation duration
      style={{
        position: "absolute",
        width: "95vw",
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlockReveal;
