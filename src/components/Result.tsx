import React from 'react';

import { Input } from 'antd';
import '../scss/components/_result.scss';

interface IProps {
  history: string,
  output: string,
};

export const Result: React.FC<IProps> = ({ history, output }) => {
  return (
    <div className="calculator__result">
      <Input value={history} disabled className="history" />
      <Input value={output} disabled />
    </div>
  );
}
