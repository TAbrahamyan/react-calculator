import React from 'react';

import { Button } from 'antd';
import './scss/components/App.scss';

const App:React.FunctionComponent = () => {
  const [ counter, setCounter ] = React.useState<number>(0);

  return (
    <div className="app">
      <Button type="primary" onClick={() => setCounter(counter + 1)}>+1</Button>
      <Button type="primary" onClick={() => setCounter(counter - 1)} danger>-1</Button>
      <h1>{ counter }</h1>
    </div>
  );
}

export default App;
