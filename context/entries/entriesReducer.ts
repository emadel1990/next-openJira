import { EntriesState } from './';

type EntriesActionType = { type: '[Entries] - ActionName' };

//reducer is not async
export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    // case '[Entries] - ActionName':
    //   return {
    //     ...state
    //   };

    default:
      return state;
  }
};
