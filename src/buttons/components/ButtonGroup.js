import { ACTIONS } from "../actions";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";

const spanOneBtns = [
  "DEL",
  "/",
  "1",
  "2",
  "3",
  "*",
  "4",
  "5",
  "6",
  "+",
  "7",
  "8",
  "9",
  "-",
  ".",
  "0",
];

const ButtonGroup = ({ dispatch }) => (
  <>
    <button
      className="span-two"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    >
      AC
    </button>
    <button onClick={()=>dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
    <OperationButton operation="/" dispatch={dispatch} />
    <DigitButton digit="1" dispatch={dispatch} />
    <DigitButton digit="2" dispatch={dispatch} />
    <DigitButton digit="3" dispatch={dispatch} />
    <OperationButton operation="*" dispatch={dispatch} />
    <DigitButton digit="4" dispatch={dispatch} />
    <DigitButton digit="5" dispatch={dispatch} />
    <DigitButton digit="6" dispatch={dispatch} />
    <OperationButton operation="+" dispatch={dispatch} />
    <DigitButton digit="7" dispatch={dispatch} />
    <DigitButton digit="8" dispatch={dispatch} />
    <DigitButton digit="9" dispatch={dispatch} />
    <OperationButton operation="-" dispatch={dispatch} />
    <DigitButton digit="." dispatch={dispatch} />
    <DigitButton digit="0" dispatch={dispatch} />
    <button
      className="span-two"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  </>
);

export default ButtonGroup;
