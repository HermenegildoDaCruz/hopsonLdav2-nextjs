'use client'
import { createContext, useContext, useState } from "react";

export const MobileMenuContext = createContext(
    {
        showMobileMenu: false,
        toggleMobileMenu: () => {},
    }
);

export const useMobileMenuContext = () => {
    const context = useContext(MobileMenuContext);
    if (!context) {
        throw new Error("Apenas os componentes dentro de MobileMenuContextProvider podem acessar este contexto.");
    }
    return context;
};

export default function MobileMenuContextProvider({ children }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function toggleMobileMenu() {
        setShowMobileMenu(prev => !prev);
    }

    return (
        <MobileMenuContext.Provider value={{ showMobileMenu, toggleMobileMenu }}>
            {children}
        </MobileMenuContext.Provider>
    );
}