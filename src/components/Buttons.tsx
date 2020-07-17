import React from 'react';

import { Button } from 'antd';

const MAIN_OPERATIONS = ['C', 'CE', '-/+'];
const BUTTON_NUMBERS = '1 2 3 4 5 6 7 8 9 0'.split(' ');
const BUTTON_OPERATIONS = '/ * + - ='.split(' ');

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
      && !history
      && t !== '='
      && !output.endsWith('.')
    ) {
      setHistory(output + t);
      setOutput('');
      return;
    } else if (
      history
      && output
      && t !== '='
      && !output.endsWith('.')
    ) {
      setHistory((String(eval(history + output)) + t));
      setOutput('');
      return;
    } else if (
      history
      && output
      && t === '='
      && !output.endsWith('.')
    ) {
      setOutput(String(eval(history + output)));
      setHistory('');
      return;
    } else {
      return;
    }
  }

  const outsiderEvents = React.useCallback(({ target: { textContent: t } }: any): void => {
    if (t === 'C') {
      setOutput('');
      setHistory('');
      return;
    } else if (t === 'CE') {
      setOutput(output.slice(0, -1));
      return;
    } else if (t === '-/+' && !output.endsWith('.')) {
      setOutput(String(-output));
      return;
    } else if (t === '.' && output && !output.includes('.')) {
      setOutput(output + '.');
      return;
    } else {
      return;
    }
  }, [ setOutput, output, setHistory ]);

  React.useEffect(() => {
    document.addEventListener('click', outsiderEvents);

    return () => {
      document.removeEventListener('click', outsiderEvents);
    }
  }, [ outsiderEvents ]);

  return (
    <div className="calculator__buttons">
      {
        MAIN_OPERATIONS?.map((button: any, index: number) =>
          <Button
            key={index}
            type="primary"
          >
            { button }
          </Button>)
      }

      {
        BUTTON_NUMBERS?.map((button: any, index: number) =>
          <Button
            key={index}
            type="primary"
            onClick={addNumberHandler}
          >
            { button }
          </Button>)
      }

      <Button type="primary">.</Button>

      {
        BUTTON_OPERATIONS?.map((button: any, index: number) =>
          <Button
            key={index}
            type="primary"
            onClick={operationHandler}
          >
            { button }
          </Button>)
      }
    </div>
  );
}
