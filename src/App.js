import './App.css';

import {useState} from 'react';

// 👇️ Now the component takes a props object
// and calls function as props.setCount
function Child(props) {
  console.log('props obj:', props);
  return (
    <div>
      <button
        onClick={() => props.setCount(current => current + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child setCount={setCount} />

      <h2>Count: {count}</h2>
    </div>
  );
}
