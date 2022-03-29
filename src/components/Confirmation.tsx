import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";
import clearAction from "../utils/clearAction";
import { initialState } from "./RegistrationForm";

function Confirmation() {
  const { actions, state } = useStateMachine({ updateAction, clearAction });
  function onSubmit() {
    actions.clearAction(initialState);
  }
  return (
    <div>
      <div>{JSON.stringify(state, null, 2)}</div>
      <button onClick={() => onSubmit()}>Submit</button>
    </div>
  );
}

export default Confirmation;
