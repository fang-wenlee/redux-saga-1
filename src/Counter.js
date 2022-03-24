import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/ducks/counter";

const Counter = ({ name }) => {
  const [vote, setVote] = useState(0);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setVote(vote + 1);
    // setCount(count + 1);
    dispatch(increment());
  };
  const handleDecrement = () => {
    if (vote > 0) {
      setVote(vote - 1);
      // setCount(count - 1);
      dispatch(decrement());
    }
  };
  return (
    <div style={{ margin: "15px", padding: "15px", backgroundColor: "grey" }}>
      <h3>
        {name} votes: {vote}
      </h3>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};
export default Counter;
