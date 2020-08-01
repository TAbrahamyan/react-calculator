import React from 'react';

import { Context } from '../Context';

import { Input } from 'antd';
import '../scss/components/_result.scss';

export const Result: React.FC = () => {
  const { calculator, setCalculator } = React.useContext(Context);

  const changeValuHandler: any = ({ target: { value: v } }: any): void => {
    if (v.match(/\D/g)) return;
    setCalculator({ ...calculator, output: v });
  }

  return (
    <div className="calculator__result">
      <Input value={calculator.history} disabled className="history" />
      <Input value={calculator.output} onChange={changeValuHandler} />
    </div>
  );
}
