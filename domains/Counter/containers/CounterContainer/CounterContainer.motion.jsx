import { motion } from "framer-motion";

import CounterContainer from "./CounterContainer.component";

const MotionCounterContainer = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CounterContainer />
    </motion.div>
  );
};

export default MotionCounterContainer;
