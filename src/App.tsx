import React from 'react';

import { Calculator } from './components/Calculator';

import './scss/components/_app.scss';

export const App:React.FunctionComponent = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}
