import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenuOpen?: boolean;
  addingTask?: boolean;
  isDraggingTask?: boolean;
  children?: ReactNode | any;
}
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  addingTask: false,
  isDraggingTask: false
};

export const UIProvider: FC<UIState> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };
  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  const isAddingTask = (addingStatus: boolean) => {
    dispatch({ type: 'UI - Is Adding Task', payload: addingStatus });
  };

  const setStartDragging = () => {
    dispatch({ type: 'UI - Start Dragging' });
  };
  const setEndDragging = () => {
    dispatch({ type: 'UI - End Dragging' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,

        isAddingTask,

        setStartDragging,
        setEndDragging
      }}>
      {children}
    </UIContext.Provider>
  );
};
