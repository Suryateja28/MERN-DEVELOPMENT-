import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [Num, setNum] = useState(1);
  const [count, setCount] = useState(0);

  const mulFun = (num) => {
    console.log("mulFun called");
    return num * 10;
  }

  const calfun = useMemo(() => {
    return mulFun(Num);
  }, [Num]);

  return (
    <div style={{
      margin: "50px",
      padding: "20px",
      border: "2px solid #f84464",
      borderRadius: "12px",
      color: "white",
      backgroundColor: "#1a1c24",
      fontFamily: "Outfit, sans-serif"
    }}>
      <h1>useMemo Hooks</h1>
      <div style={{ marginBottom: "20px" }}>
        <h2>Multiplied Value: {calfun}</h2>
        <button
          onClick={() => setNum(Num + 1)}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#f84464", border: "none", color: "white", borderRadius: "5px" }}
        >
          Increase Number (Triggers useMemo)
        </button>
      </div>

      <div>
        <h2>Counter: {count}</h2>
        <p>(Changing this won't call mulFun thanks to useMemo)</p>
        <button
          onClick={() => setCount(count + 1)}
          style={{ padding: "10px 20px", cursor: "pointer", background: "#333545", border: "1px solid #f84464", color: "white", borderRadius: "5px" }}
        >
          Increase Counter
        </button>
      </div>
    </div>
  );
}

export default UseMemo