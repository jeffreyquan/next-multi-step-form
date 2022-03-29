import * as React from "react";
import { StateMachineProvider, createStore } from "little-state-machine";
import PlayerName from "./PlayerName";
import PlayerAge from "./PlayerAge";
import Confirmation from "./Confirmation";

export const initialState = {
  firstName: "",
  lastName: "",
  age: "",
};

createStore(initialState);

function RegistrationForm({
  step,
  nextStep,
  prevStep,
}: {
  step: string | undefined;
  nextStep: () => void;
  prevStep: () => void;
}) {
  return (
    <StateMachineProvider>
      <form>
        <h2>Registration Form</h2>
        {step === "1" && <PlayerName nextStep={nextStep} />}
        {step === "2" && <PlayerAge prevStep={prevStep} nextStep={nextStep} />}
        {step === "3" && <Confirmation />}
      </form>
    </StateMachineProvider>
  );
}

export default RegistrationForm;
