import React from 'react';

import { IResultProps } from '../interfaces';

import { Input } from 'antd';
import '../scss/components/_result.scss';

export const Result: React.FC<IResultProps> = ({
  history,
  output,
  setOutput,
 }) => {
  const changeValuHandler: any = ({ target: { value: v } }: any): void => {
    if (v.match(/\D/g)) return;
    setOutput(v);
  }

  return (
    <div className="calculator__result">
      <Input value={history} disabled className="history" />
      <Input value={output} onChange={changeValuHandler} />
    </div>
  );
}
