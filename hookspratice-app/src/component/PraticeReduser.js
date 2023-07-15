import {  useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state;
    }
}
export default function IncreseDecrese() {

    const[count,dispach] = useReducer(reducer, initialstate)
    return (
        <>
            <div className="conatiner">
                <button onClick={()=>dispach("increment")}>Increse</button>
                <h1>{count}</h1>
                <button onClick={()=>dispach("decrement") }>Decrese</button>
            </div>
        </>
    )
}