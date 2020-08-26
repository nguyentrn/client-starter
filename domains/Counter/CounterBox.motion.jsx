import { motion } from "framer-motion";

import CounterBox from "./CounterBox.component";

const MotionCounterBox = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <CounterBox />
    </motion.div>
  );
};

export default MotionCounterBox;
