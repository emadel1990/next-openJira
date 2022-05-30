import { createContext, ReactNode } from 'react';
import { Entry } from '../../interfaces';

export interface UIContextProps {
  entries?: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as UIContextProps);
