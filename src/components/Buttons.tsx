import React from 'react';

import { Button } from 'antd';
import '../scss/components/_buttons.scss';

const BUTTON_NUMBERS: string[] = [
  '7', '8', '9',
  '4', '5', '6',
  '1', '2', '3',
  '0'
];
const BUTTON_OPERATIONS: string[] = [ '/', '*', '-', '+', '=' ];

interface IProps {
  output: string,
  setOutput: Function,
  history: string,
  setHistory: Function,
}

export const Buttons: React.FC<IProps> = ({
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
    } else if (output && history && t === '=' && !output.endsWith('.')) {
      setOutput(String(eval(history + output)));
      setHistory('');
    } else if (output && !output.endsWith('.')) {
      setHistory(history + ' ' + output + ' ' + t);
      setOutput('');
    }
  }

  const clearAllHandler = (): void => {
    setOutput('');
    setHistory('');
  }

  const addDecimalHandler = (): void => {
    if (output && !output.includes('.')) {
      setOutput(output + '.');
    }
  }

  const clearOutputHandler = (): void => setOutput('');

  const removeLastHandler = (): void => setOutput(output.slice(0, -1));

  const reverseHandler = (): void => output.endsWith('.') ? false : setOutput(String(-output));

  return (
    <div className="calculator__buttons">
      <div className="calculator__buttons__main">
        <div>
          <Button shape="circle" type="primary" onClick={clearOutputHandler}>CE</Button>
          <Button shape="circle" type="primary" onClick={clearAllHandler}>C</Button>
          <Button shape="circle" type="primary" onClick={removeLastHandler}>←</Button>
        </div>

        <div>
          {
            BUTTON_NUMBERS?.map((button: string, i: number) =>
              <Button key={i} shape="circle" type="primary" onClick={addNumberHandler}>
                { button ?? '' }
              </Button>
            )
          }

          <Button shape="circle" type="primary" onClick={addDecimalHandler}>.</Button>
          <Button shape="circle" type="primary" onClick={reverseHandler}>-/+</Button>
        </div>
      </div>

      <div className="calculator__buttons__operators">
        {
          BUTTON_OPERATIONS?.map((button: string, i: number) =>
            <Button key={i} shape="circle" type="primary" onClick={operationHandler}>
              { button ?? '' }
            </Button>
          )
        }
      </div>
    </div>
  );
}
