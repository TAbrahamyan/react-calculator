import React from 'react';

import { Button, Input } from 'antd';
import '../scss/components/_calculator.scss';

export const Calculator:React.FunctionComponent = () => {
  const addNumberHandler = (): void => {}

  const operationHandler = (): void => {}

  return (
    <div className="calculator">
      <div className="calculator__result">
        <Input disabled />
        <Input disabled />
      </div>
      <div className="calculator__buttons">
        <Button type="primary">C</Button>
        <Button type="primary">CE</Button>
        <Button type="primary">-/+</Button>

        <Button type="primary" onClick={addNumberHandler}>7</Button>
        <Button type="primary" onClick={addNumberHandler}>8</Button>
        <Button type="primary" onClick={addNumberHandler}>9</Button>

        <Button type="primary" onClick={addNumberHandler}>4</Button>
        <Button type="primary" onClick={addNumberHandler}>5</Button>
        <Button type="primary" onClick={addNumberHandler}>6</Button>

        <Button type="primary" onClick={addNumberHandler}>1</Button>
        <Button type="primary" onClick={addNumberHandler}>2</Button>
        <Button type="primary" onClick={addNumberHandler}>3</Button>
        <Button type="primary" onClick={addNumberHandler}>0</Button>

        <Button type="primary" onClick={operationHandler}>/</Button>
        <Button type="primary" onClick={operationHandler}>*</Button>
        <Button type="primary" onClick={operationHandler}>+</Button>
        <Button type="primary" onClick={operationHandler}>-</Button>
        <Button type="primary" onClick={operationHandler}>=</Button>
      </div>
    </div>
  );
}
