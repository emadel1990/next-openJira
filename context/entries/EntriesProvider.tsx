import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries?: Entry[];
  children?: ReactNode | any;
}
const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente lorem ipsum dolor sit amet',
      status: 'Pending',
      createdAt: Date.now() - 12132329
    },
    {
      _id: uuidv4(),
      description: 'In Progress lorem ipsum as dolor sit amet asd ',
      status: 'In Progress',
      createdAt: Date.now() - 100000
    },
    {
      _id: uuidv4(),
      description: 'Completed lorem ipsum',
      status: 'Completed',
      createdAt: Date.now() - 10000000
    }
  ]
};

export const EntriesProvider: FC<EntriesState> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: 'Pending',
      createdAt: Date.now()
    };

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Update-Entry', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
