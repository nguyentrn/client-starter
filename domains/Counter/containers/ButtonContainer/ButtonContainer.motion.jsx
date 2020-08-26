import { motion } from "framer-motion";

import ButtonContainer from "./ButtonContainer.component";

const MotionButtonContainer = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ButtonContainer />
    </motion.div>
  );
};

export default MotionButtonContainer;
