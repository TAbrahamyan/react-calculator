import React from 'react';

import { Input } from 'antd';

interface IProps {
  history: string,
  output: string,
};

export const Result: React.FunctionComponent<IProps> = ({ history, output }) => {
  return (
    <div className="calculator__result">
      <Input value={history} disabled />
      <Input value={output} disabled style={{ color: 'black', fontSize: '1.8em' }} />
    </div>
  );
}
