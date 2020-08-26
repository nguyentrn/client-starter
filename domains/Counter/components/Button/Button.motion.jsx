import { motion } from "framer-motion";

import Button from "./Button.component";

const MotionButton = ({ fn, label }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Button fn={fn} label={label} />
    </motion.div>
  );
};

export default MotionButton;
