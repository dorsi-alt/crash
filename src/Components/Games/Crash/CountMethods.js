import React, { useEffect, useState, useRef } from "react";

//setInterval
export const CountSetInterval = (props) => {


  const { number, bet, cash } = props;

  // number displayed by component
  const [count, setCount] = useState("0");
  const [stop, setStop] = useState(false);

  // calc time taken for computation

  useEffect(() => {
    let start = 0.01;
    // first three numbers from props
    const end = parseFloat(number);
    const cashout = parseFloat(cash);
    // if zero, return
    if (start === end) return;

    let timer = setInterval(() => {
      start += 0.01;

      //update uisng state
      setCount(start);


      if (start >= end || cashout <= start) {
        clearInterval(timer);
      }
    });

    // dependency array
  }, [number,bet,cash]);

  return (
    <>
      <span className="Count">
        {Math.round(count * 100)/100}
      </span>{" "}
      {"     "}
      {parseInt(number) <= parseInt(count) && (
        <span>
          {/* | Took : <b>{timeTaken}</b> seconds to complete */}
          CRASH, YOU LOST {bet}
        </span>
      )}
      {parseInt(cash) <= parseInt(count) && (
        <span>
          {/* | Took : <b>{timeTaken}</b> seconds to complete */}
          YOU WON {bet * cash}
        </span>
      )}
    </>
  );
};