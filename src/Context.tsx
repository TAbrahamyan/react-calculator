import React from 'react';

export type DefaultContextType = { output: string, history: string };

export const defaultContext: DefaultContextType = { output: '', history: '' };

export const Context = React.createContext<any>(defaultContext);
