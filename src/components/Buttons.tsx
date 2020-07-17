import React from 'react';

import { Button } from 'antd';

const BUTTON_NUMBERS = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0' ];
const BUTTON_OPERATIONS = ['/', '*', '+', '-', '='];

interface IProps {
  output: string,
  setOutput: Function,
  history: string,
  setHistory: Function,
}

export const Buttons: React.FunctionComponent<IProps> = ({
  output,
  setOutput,
  history,
  setHistory,
}) => {
  const addNumberHandler = ({ target: { textContent: t } }: any): void => {
    if (output.startsWith('0') && output.slice(1, 2) !== '.') {
      setOutput(t);
      return;
    }

    setOutput(output + t);
  };

  const operationHandler = ({ target: { textContent: t } }: any): void => {
    if (!history && t === '=') {
      return;
    } else if (
      output
      && history
      && t === '='
      && !output.endsWith('.')
    ) {
      setOutput(String(eval(history + output)));
      setHistory('');
      return;
    } else if (output && !output.endsWith('.')) {
      setHistory(history + output + t);
      setOutput('');
      return;
    }
  }

  const clearAllHandler = (): void => {
    setOutput('');
    setHistory('');
  }

  const removeLastHandler = (): void => setOutput(output.slice(0, -1));

  const reverseHandler = (): void => output.endsWith('.') ? false : setOutput(String(-output));

  const addDecimalHandler = (): void => {
    if (output && !output.includes('.')) {
      setOutput(output + '.');
      return;
    }
  }

  return (
    <div className="calculator__buttons">
      <Button type="primary" onClick={clearAllHandler}>C</Button>
      <Button type="primary" onClick={removeLastHandler}>CE</Button>
      <Button type="primary" onClick={reverseHandler}>-/+</Button>

      {
        BUTTON_NUMBERS?.map((button: string, i: number) =>
          <Button key={i} type="primary" onClick={addNumberHandler}>
            { button }
          </Button>)
      }

      <Button type="primary" onClick={addDecimalHandler}>.</Button>

      {
        BUTTON_OPERATIONS?.map((button: string, i: number) =>
          <Button key={i} type="primary" onClick={operationHandler}>
            { button }
          </Button>)
      }
    </div>
  );
}
