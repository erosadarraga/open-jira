import { createContext } from 'react';

interface ContextProps {
    sideMenuOpen: boolean;
    isDragging: boolean;
    openSideMenu: () => any;
    closeSideMenu: () => any;
    setIsAddingEntry: (boleano: boolean) => void;
    isAddingEntry: boolean
    startDragging: () => any;
    endDragging: () => any;

}

export const UiContext = createContext({} as ContextProps)