import React, { createContext, useState, useContext } from "react";

export const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animation, setAnimation] = useState(null);

  return (
    <AnimationContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
