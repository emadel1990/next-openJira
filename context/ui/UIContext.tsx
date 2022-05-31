import { createContext } from 'react';

export interface UIContextProps {
  sideMenuOpen?: boolean;
  addingTask?: boolean;
  isDraggingTask?: boolean;

  //Methods
  openSideMenu: () => void;
  closeSideMenu: () => void;

  isAddingTask: (addingStatus: boolean) => void;

  setStartDragging: () => void;
  setEndDragging: () => void;
}

export const UIContext = createContext({} as UIContextProps);
