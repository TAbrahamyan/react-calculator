import React from 'react';

export interface IDefaultContext {
  output: string,
  history: string,
};

export const defaultContext: IDefaultContext = {
  output: '',
  history: '',
};

export const Context = React.createContext<any>(defaultContext);
