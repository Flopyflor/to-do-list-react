import React, { createContext, useState } from "react";

export const PortalContext = createContext();

export const PortalProvider = ({ children }) => {
    const [isPortalVisible, setPortalVisible] = useState(false);
  
    const showPortal = () => {
        setPortalVisible(true);
    }
    const closePortal = () => {
        setPortalVisible(false);
    }

  return (
    <PortalContext.Provider
    value={{
        showPortal,
        closePortal,
        isPortalVisible
    }}
    >
        {children}
    </PortalContext.Provider>
  );
};


