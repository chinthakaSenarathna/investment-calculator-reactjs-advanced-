import { useState } from "react"

export default function UserInput(){
    const [userInput,setUserInput] = useState({
        initialInvestment: 10000,
        anualInvestment: 1000,
        expectedReturn: 5,
        duration: 10
    });

    function handleUserInput(inputIdentifier,newValue){
        setUserInput((prevUserInput) => {
            console.log(inputIdentifier);
            console.log(newValue);
            const updateUserInput = {...prevUserInput};
            updateUserInput[inputIdentifier] = newValue;
            return updateUserInput;
        })
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" 
                        required 
                        value={userInput.initialInvestment}
                        onChange={(e) => handleUserInput("initialInvestment",e.target.value)}
                    />
                </p>
                <p>
                    <label>Anual Investment</label>
                    <input type="number" 
                        required 
                        value={userInput.anualInvestment}
                        onChange={(e) => handleUserInput("anualInvestment",e.target.value)}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" 
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) => handleUserInput("expectedReturn",e.target.value)}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" 
                        required 
                        value={userInput.duration}
                        onChange={(e) => handleUserInput("duration",e.target.value)}
                    />
                </p>
            </div>
        </section>
    )
}