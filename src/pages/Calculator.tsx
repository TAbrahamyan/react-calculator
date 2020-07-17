import React from 'react';

import { Result } from '../components/Result';
import { Buttons } from '../components/Buttons';

import '../scss/components/_calculator.scss';

export const Calculator: React.FunctionComponent = () => {
  const [ history, setHistory ] = React.useState<string>('');
  const [ output, setOutput ] = React.useState<string>('');

  return (
    <div className="calculator">
      <Result
        history={history}
        output={output}
      />

      <Buttons
        output={output}
        setOutput={setOutput}
        history={history}
        setHistory={setHistory}
      />
    </div>
  );
}
