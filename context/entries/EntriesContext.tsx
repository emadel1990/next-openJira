import { createContext, ReactNode } from 'react';
import { Entry } from '../../interfaces';

export interface UIContextProps {
  entries?: Entry[]; // todo: falta tipo de dato del arreglo
}

export const EntriesContext = createContext({} as UIContextProps);
