import { UiState } from './UiProvider';

type UiActionType =
    | { type: "UI - Open Sidebar", }
    | { type: "UI - Close Sidebar", }
    | { type: "isAddingEntry", payload: boolean }
    | { type: "Ui - Start Dragging" }
    | { type: "Ui - End Dragging" }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch (action.type) {
        case "UI - Open Sidebar":
            return {
                ...state,
                sideMenuOpen: true
            }
        case "UI - Close Sidebar":
            return {
                ...state,
                sideMenuOpen: false
            }
        case "isAddingEntry":
            return { ...state, isAddingEntry: action.payload }

        case "Ui - Start Dragging":
            return { ...state, isDragging: true }

        case "Ui - End Dragging":
            return { ...state, isDragging: false }
        default:
            return state;
    }
}