import "./styles.css";
import Counter from "./Counter";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./redux/ducks/user";
const employees = [
  {
    id: 1,
    name: "Fang-Wen"
  },
  {
    id: 2,
    name: "Hsi-Wen"
  },
  {
    id: 3,
    name: "Pohan"
  },
  {
    id: 4,
    name: "Emily"
  }
];
export default function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  console.log(user);
  return (
    <div className="App">
      <h1>Total votes: {count}</h1>
      {employees.map((e) => (
        <Counter key={e.id} name={e.name} />
      ))}
    </div>
  );
}
