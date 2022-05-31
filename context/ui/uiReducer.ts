import { UIState } from '.';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Is Adding Task'; payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - End Dragging' };

//reducer is not async
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  if (state) {
    switch (action.type) {
      case 'UI - Open Sidebar':
        return {
          ...state,
          sideMenuOpen: true
        };
      case 'UI - Close Sidebar':
        return {
          ...state,
          sideMenuOpen: false
        };
      case 'UI - Is Adding Task':
        return {
          ...state,
          addingTask: action.payload
        };
      case 'UI - Start Dragging':
        return {
          ...state,
          isDraggingTask: true
        };
      case 'UI - End Dragging':
        return {
          ...state,
          isDraggingTask: false
        };
      default:
        return state;
    }
  } else return state;
};
