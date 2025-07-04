import { useState } from "react";

import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const isInputValid = userInput.duration >= 1;

  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      // console.log(inputIdentifier);
      // console.log(newValue);
      const updateUserInput = { ...prevUserInput };
      const numericValue = isNaN(+newValue) ? 0 : +newValue;
      updateUserInput[inputIdentifier] = numericValue;
      return updateUserInput;
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onHandleUserInput={handleUserInput} />
      { !isInputValid && <p className="center">Please input duration greater than zero...</p> }
      { isInputValid && <Results userInput={userInput} /> }
    </>
  );
}

export default App;
