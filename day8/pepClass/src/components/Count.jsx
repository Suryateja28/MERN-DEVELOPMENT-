import React, { useState } from "react";
import Home from "./Home";

function Count() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    function Increment() {
        setCount(c => c + 1);
    }
    function Decrement() {
        setCount(c => c - 1);
    }
    function toggleShow() {
        setShow(!show)
    }

    return (
        <>
            <h1>count: {count}</h1>
            <button onClick={Increment}> Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={toggleShow}>Show Home </button>

            {
                show && <Home />
            }
        </>
    )
}

export default Count;