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
      description: 'lorem ipsum dolor sit amet',
      status: 'Pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'lorem ipsum as dolor sit amet asd ',
      status: 'In Progress',
      createdAt: Date.now() - 100000
    },
    {
      _id: uuidv4(),
      description: 'lorem ipsum',
      status: 'Completed',
      createdAt: Date.now() - 10000000
    }
  ]
};

export const EntriesPovider: FC<EntriesState> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
