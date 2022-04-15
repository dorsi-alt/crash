import { useState, useEffect, useCallback } from "react";
import { Body  } from "./CrashStyles";
import { CountSetInterval } from "./CountMethods";


// export const Crash = () => {
//     let arr = [];
//     const [count, setCount] = useState(0);

//     function generateRandomInteger(max) {
//         return Math.floor(Math.random() * max) + 1;
//     }

//     let crash = generateRandomInteger(10);


//     function getIncrements(max){
//         for(var i = 1; i < max; i += .1) {
//             console.log(i)
//             arr.push(i)
//         }
//     }

//     getIncrements(crash)
//     return (
//         <Body>
//             {this.setState()}
//         </Body>
//     );
// };

export const Crash = () => {
    const [inputValue, setNumber] = useState(0);
    const [duration, setDuration] = useState(0);
    const [start, setStart] = useState(false);
    const [bet, setBet] = useState(0);
    const [cash, setCash] = useState(0);
    
    //If any input changes reset
    const basicReset = () => {
      setStart(false);
    };
    
    function generateRandomInteger(min,max,decimals) {
        const str = (Math.random() * (max - min) + min).toFixed(decimals);
        return parseFloat(str);
    }
    let CrashPoint = generateRandomInteger(1,10,2)
    //store number
    const inputChangeHandler = (e) => {
      const { value } = e.target;
      setBet(value);
      basicReset();
    };
    
    //store duration
    const durationChangeHandler = (e) => {
      const { value } = e.target;
      setCash(value);
      basicReset();
    };
    
    const startHandler = () => {
      // trigger the animation
      setStart(true);
    };
  
    const resetHandler = () => {
      window.location.reload();
    };
  
    return (
      <main style={{ width: "500px", margin: "50px auto" }}>
        <section className="input-area">
          <div>
            <div>
              <label>Bet Amount:</label>{" "}
              <input
                id="bet"
                type="bet"
                value={bet}
                onChange={inputChangeHandler}
              />
            </div>
            <div>
              <label>Cash Out At:</label>{" "}
              <input
                id="cash"
                type="number"
                value={cash}
                onChange={durationChangeHandler}
              />
            </div>
          </div>
          <br />
          <div>
            <button onClick={startHandler}>start</button>{" "}
            <button onClick={resetHandler}>reset</button>
          </div>
        </section>
        <br />
        <section className="result-area">
          <div>
            Game:{"  x"}
            {(start && (
              <CountSetInterval
                number={CrashPoint}
                bet={bet}
                cash={cash}
              />
            )) ||
              0}
          </div>
        </section>
      </main>
    );
};
