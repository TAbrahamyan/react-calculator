import React from 'react';

import { Input } from 'antd';

interface IProps {
  history: string,
  output: string,
};

export const Result: React.FunctionComponent<IProps> = ({ history, output }) => {
  return (
    <div className="calculator__result">
      <Input value={history} disabled className="history" />
      <Input value={output} disabled />
    </div>
  );
}
