```javascript
import { useSelector } from "react-redux";
import { increment, decrement } from "./redux/slices/countSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
const App = () => {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const upCount = () => {
    dispatch(increment(+number));
  };
  const downCount = () => {
    dispatch(decrement(+number)); //  숫자 형변환 :  1. +를 붙혀준다, 2. Number를 감싸준다. 3. parseInt로 감싸준다.
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const count = useSelector((state) => state.카운터.count);
  return (
    <>
      <button onClick={upCount}>증가</button>
      <input type="number" value={number} onChange={handleNumberChange} />
      <div>숫자 : {count}</div>
      <button onClick={downCount}>감소</button>
    </>
  );
};

export default App;
```
