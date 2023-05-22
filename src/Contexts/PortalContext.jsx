import React, { createContext, useState } from "react";

export const PortalContext = createContext();
const {Provider} = PortalContext;

export const PortalProvider = ({ children }) => {
    const [isPortalVisible, setPortalVisible] = useState(false);
  
    const showPortal = () => {
        setPortalVisible(true);
    }
    const closePortal = () => {
        setPortalVisible(false);
    }

  return (
    <Provider
    value={{
        showPortal,
        closePortal,
        isPortalVisible
    }}
    >
        {children}
    </Provider>
  );
};


