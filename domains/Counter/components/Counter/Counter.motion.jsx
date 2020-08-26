import { motion } from "framer-motion";

import Counter from "./Counter.component";

const MotionCounter = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Counter />
    </motion.div>
  );
};

export default MotionCounter;
