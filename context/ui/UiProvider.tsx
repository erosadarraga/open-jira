import { FC, useReducer } from 'react';

import { UiContext, uiReducer } from './';

export interface UiState {
    sideMenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false,
    isDragging: false
}

export const UiProvider: FC = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE,)

    const openSideMenu = () => {
        dispatch({ type: "UI - Open Sidebar" })
    }
    const closeSideMenu = () => {
        dispatch({ type: "UI - Close Sidebar" })
    }
    const setIsAddingEntry = (boleano: boolean) => {
        dispatch({ type: "isAddingEntry", payload: boleano })
    }

    const startDragging = () => {
        dispatch({ type: "Ui - Start Dragging" })
    }

    const endDragging = () => {
        dispatch({ type: "Ui - End Dragging" })
    }

    return (<UiContext.Provider value={{
        ...state,
        /* Methods */
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging,
    }}>
        {children}
    </UiContext.Provider>
    )
}