import { Entry } from '../../interfaces';
import { EntriesState } from './';

type EntriesActionType =
  | { type: '[Entry] - Add-Entry'; payload: Entry }
  | { type: '[Entry] - Update-Entry'; payload: Entry };

//reducer is not async
export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  if (state.entries) {
    switch (action.type) {
      case '[Entry] - Add-Entry':
        return {
          ...state,
          entries: [...state.entries, action.payload]
        };
      case '[Entry] - Update-Entry':
        return {
          ...state,
          entries: state?.entries?.map(entry => {
            if (entry._id === action.payload._id) {
              entry.status = action.payload.status;
              entry.description = action.payload.description;
              entry.createdAt = action.payload.createdAt;
            }
            return entry;
          })
        };

      default:
        return state;
    }
  } else return state;
};
