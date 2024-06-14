import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/slices/slice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const counter = useSelector((state) => {
    state.counter.count;
    console.log(state.counter);
  });
  console.log("counter =>", counter);

  const upCount = () => {
    dispatch(increment(Number(number)));
  };
  const downCount = () => {
    dispatch(decrement(Number(number)));
  };

  return (
    <>
      <div>111{counter}111</div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={upCount}>증가하기</button>
      <button onClick={downCount}>감소하기</button>
      <div>222{counter}222</div>
    </>
  );
};

export default App;
