import React from 'react';

import { Button, Input } from 'antd';
import '../scss/components/_calculator.scss';

export const Calculator:React.FunctionComponent = () => {
  const [ history, setHistory ] = React.useState<string>('');
  const [ output, setOutput ] = React.useState<string>('0');

  const addNumberHandler = ({ target: { textContent: t } }: any): void => {
    if (output.startsWith('0')) {
      setOutput(t);
      return;
    }

    setOutput(output + t);
  }

  const operationHandler = ({ target: { textContent: t }}: any): void => {
    if (t === '=') {
      setOutput(eval(history + output));
      setHistory('');
      return;
    }

    setHistory(output + t);
    setOutput('');
  }

  const clearAll = (): void => setOutput('0');

  const removeLast = (): void => {
    if (output === '0') {
      return;
    }

    setOutput(output.length === 1 ? output.replace(output.slice(0, 1), '0') : output.slice(0, -1));
  }

  const reverse = (): void => setOutput(String(-output));

  return (
    <div className="calculator">
      <div className="calculator__result">
        <Input value={history} disabled />
        <Input style={{ color: 'black', fontSize: '1.8em' }} value={output} disabled />
      </div>
      <div className="calculator__buttons">
        <Button type="primary" onClick={clearAll}>C</Button>
        <Button type="primary" onClick={removeLast}>CE</Button>
        <Button type="primary" onClick={reverse}>-/+</Button>

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
        <Button type="primary">.</Button>

        <Button type="primary" onClick={operationHandler}>/</Button>
        <Button type="primary" onClick={operationHandler}>*</Button>
        <Button type="primary" onClick={operationHandler}>+</Button>
        <Button type="primary" onClick={operationHandler}>-</Button>
        <Button type="primary" onClick={operationHandler}>=</Button>
      </div>
    </div>
  );
}
