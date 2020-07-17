import React from 'react';

import { Button, Input } from 'antd';
import '../scss/components/_calculator.scss';

export const Calculator:React.FunctionComponent = () => {
  const [ history, setHistory ] = React.useState<string>('');
  const [ output, setOutput ] = React.useState<string>('');

  const addNumberHandler = ({ target: { textContent: t } }: any): void => setOutput(output + t);

  const operationHandler = ({ target: { textContent: t }}: any): void => {
    if (!history && t === '=') {
      return;
    } else if (
      output
      && !history
      && t !== '='
      && !output.endsWith('.')
    ) {
      setHistory(output + t);
      setOutput('');
    } else if (
      history
      && output
      && t !== '='
      && !output.endsWith('.')
    ) {
      setHistory((eval(history + output)) + t);
      setOutput('');
      return;
    } else if (
      history
      && output
      && t === '='
      && !output.endsWith('.')
    ) {
      setOutput(eval(history + output));
      setHistory('');
      return;
    }
  }

  const outsiderEvents = React.useCallback(({ target: { textContent: t } }: any): void => {
    if (t === 'C') {
      setOutput('');
      setHistory('');
    } else if (t === 'CE') {
      setOutput(output.slice(0, -1));
    } else if (t === '-/+' && !output.endsWith('.')) {
      setOutput(String(-output));
    } else if (t === '.' && output && !output.includes('.')) {
      setOutput(output + '.');
    }
  }, [ output ]);

  React.useEffect(() => {
    document.addEventListener('click', outsiderEvents);

    return () => {
      document.removeEventListener('click', outsiderEvents);
    }
  }, [ outsiderEvents ]);

  return (
    <div className="calculator">
      <div className="calculator__result">
        <Input value={history} disabled />
        <Input value={output} disabled style={{ color: 'black', fontSize: '1.8em' }} />
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
