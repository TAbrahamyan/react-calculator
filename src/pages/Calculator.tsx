import React from 'react';

import { Result } from '../components/Result';
import { Buttons } from '../components/Buttons';

import { Typography } from 'antd';
import '../scss/components/_calculator.scss';

export const Calculator: React.FC = () => {
  const [ history, setHistory ] = React.useState<string>('');
  const [ output, setOutput ] = React.useState<string>('');

  return (
    <div className="calculator">
      <header className="calculator__header">
        <Typography.Title level={1}>
          <span className="calcu">Calcu</span>
          lator
        </Typography.Title>
      </header>

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
