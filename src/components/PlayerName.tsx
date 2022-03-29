import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "../utils/updateAction";

function PlayerName({ nextStep }: { nextStep: () => void }) {
  const { register, getValues } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onClick = () => {
    actions.updateAction(getValues());
    nextStep();
  };
  console.log(state);
  return (
    <>
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.firstName} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <button type="button" onClick={() => onClick()}>
        Next
      </button>
    </>
  );
}

export default PlayerName;
