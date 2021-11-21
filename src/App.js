import { useReducer } from "react";
import "./styles.css";
import ButtonGroup from "./buttons/components/ButtonGroup";
import reducer from "./buttons/reducer";



const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

const formatOperand = (operand) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
};


const App = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {formatOperand(currentOperand)} {operation}
        </div>
        <div className="current-operand">{formatOperand(previousOperand)}</div>
      </div>
      <ButtonGroup dispatch={dispatch} />
    </div>
  );
};

export default App;
