import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/slices/slice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const counter = useSelector(
    (state) => state.counter.count //{return state.counter.count}을 해주던가, 중괄호 없애든가
  );

  const upCount = () => {
    dispatch(increment(Number(number)));
  };
  const downCount = () => {
    dispatch(decrement(Number(number)));
  };

  return (
    <>
      <div>카운트 : {counter}</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={upCount}>증가하기</button>
      <button onClick={downCount}>감소하기</button>
    </>
  );
};

export default App;
