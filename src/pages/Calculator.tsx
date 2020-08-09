import React from 'react';

import { Result } from '../components/Result';
import { Buttons } from '../components/Buttons';
import { Context, defaultContext , IDefaultContext } from '../Context';

import { Typography } from 'antd';

export const Calculator: React.FC = () => {
  const [ calculator, setCalculator ] = React.useState<IDefaultContext>(defaultContext);

  return (
    <Context.Provider value={{ calculator, setCalculator }}>
      <div className="calculator">
        <header className="calculator__header">
          <Typography.Title level={1}>
            <span className="calcu">Calcu</span>
            lator
          </Typography.Title>
        </header>

        <Result />
        <Buttons />
      </div>
    </Context.Provider>
  );
}
