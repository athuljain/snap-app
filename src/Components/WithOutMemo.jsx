import { useState } from "react";

function WithOutMemo() {
  const [count, setCount] = useState(0);
  const [evenNum, setEvenNum] = useState(2);

  function evenNumDouble() {
    console.log("double");
    return evenNum * 2;
  }

  return (
    <div>
        <h1 style={{color:"red"}}>Without useMemo</h1>

      <h2>Counter: {count}</h2>
      <h2>Even Numbers: {evenNum}</h2>
      <h2>even Number Double Value: {evenNumDouble()}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setEvenNum(evenNum + 2)}>Even Numbers</button>
    </div>
  );
}

export default WithOutMemo;
