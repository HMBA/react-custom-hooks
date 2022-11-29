import { useState } from 'react';

const useGetLightMode = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return { isLightMode, setIsLightMode };
};

export default useGetLightMode;
