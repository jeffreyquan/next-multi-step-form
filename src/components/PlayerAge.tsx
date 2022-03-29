import { useStateMachine } from "little-state-machine";
import { useForm } from "react-hook-form";
import updateAction from "../utils/updateAction";

function PlayerAge({
  nextStep,
  prevStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
}) {
  const { register, getValues } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  function onClick() {
    actions.updateAction(getValues());
    nextStep();
  }
  return (
    <div>
      <label>
        Age:
        <input {...register("age")} defaultValue={state.age} />
        <button type="button" onClick={() => prevStep()}>
          Previous
        </button>
        <button type="button" onClick={() => onClick()}>
          Next
        </button>
      </label>
    </div>
  );
}

export default PlayerAge;
