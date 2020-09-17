import React from 'react';

import { Context, defaultContext } from '../Context';
import { Button } from 'antd';

const BUTTON_OPERATIONS: string[] = [ '/', '*', '-', '+', '=' ];
const BUTTON_NUMBERS: string[] = [
  '7', '8', '9',
  '4', '5', '6',
  '1', '2', '3',
  '0',
];

export const Buttons: React.FC = (): React.ReactElement => {
  const { calculator, setCalculator } = React.useContext(Context);

  const addNumberHandler: any = ({ target: { textContent: t } }: any): void => {
    if (calculator.output.startsWith('0') && calculator.output.slice(1, 2) !== '.') {
      setCalculator({ ...calculator, output: t });
      return;
    }

    setCalculator({ ...calculator, output: calculator.output + t });
  };

  const operationHandler: any = ({ target: { textContent: t } }: any): void => {
    if (!calculator.history && t === '=') {
      return;
    } else if (calculator.output && calculator.history && t === '=' && !calculator.output.endsWith('.')) {
      setCalculator({ output: String(eval(calculator.history + calculator.output)), history: '' });
    } else if (calculator.output && !calculator.output.endsWith('.')) {
      setCalculator({ output: '', history: (calculator.history + ' ' + calculator.output + ' ' + t) });
    }
  }

  const clearAllHandler: any = (): void => setCalculator(defaultContext);

  const addDecimalHandler: any = (): void => {
    if (calculator.output && !calculator.output.includes('.')) {
      setCalculator({ ...calculator, output: calculator.output + '.' });
    }
  }

  const clearOutputHandler: any = (): void => setCalculator({ ...calculator, output: '' });

  const removeLastHandler: any = (): void => setCalculator({ ...calculator, output: calculator.output.slice(0, -1) });

  const reverseHandler: any = (): void =>
    calculator.output.endsWith('.') ? false : setCalculator({ ...calculator, output: String(-calculator.output) });

  return (
    <div className="calculator__buttons">
      <div className="calculator__buttons__main">
        <div>
          <Button shape="circle" type="primary" onClick={clearOutputHandler}>CE</Button>
          <Button shape="circle" type="primary" onClick={clearAllHandler}>C</Button>
          <Button shape="circle" type="primary" onClick={removeLastHandler}>←</Button>
        </div>

        <div>
          {BUTTON_NUMBERS?.map((button: string, i: number) =>
            <Button key={i} shape="circle" type="primary" onClick={addNumberHandler}>
              { button ?? '' }
            </Button>
          )}

          <Button shape="circle" type="primary" onClick={addDecimalHandler}>.</Button>
          <Button shape="circle" type="primary" onClick={reverseHandler}>-/+</Button>
        </div>
      </div>

      <div className="calculator__buttons__operators">
        {BUTTON_OPERATIONS?.map((button: string, i: number) =>
          <Button key={i} shape="circle" type="primary" onClick={operationHandler}>
            { button ?? '' }
          </Button>
        )}
      </div>
    </div>
  );
}
