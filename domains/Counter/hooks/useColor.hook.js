import { useState, useEffect } from "react";

const useColor = (value) => {
  const [isPositive, setIsPositive] = useState(true);

  useEffect(() => {
    setIsPositive(value >= 0);
  }, [value]);

  return isPositive;
};

export default useColor;
