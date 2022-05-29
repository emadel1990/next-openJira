import { FC, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sideMenuOpen?: boolean;
  children?: ReactNode | any;
}
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false
};

export const UIPovider: FC<UIState> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' });
  };
  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu
      }}>
      {children}
    </UIContext.Provider>
  );
};
