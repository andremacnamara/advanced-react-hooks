// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function nameReducer(previousName, newName) {
//   return newName
// }

// const initialNameValue = 'Joe'

// function NameInput() {
//   const [name, setName] = React.useReducer(nameReducer, initialNameValue)
//   const handleChange = event => setName(event.target.value)
//   return (
//     <>
//       <label>
//         Name: <input defaultValue={name} onChange={handleChange} />
//       </label>
//       <div>You typed: {name}</div>
//     </>
//   )
// }

function countReducer(state, newState) {
  return newState;
}

const initialCountValue = 0;

// function countReducer
function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  // const [count, setCount] = React.useState(initialCount)
    const [count, setCount] = React.useReducer(countReducer, initialCountValue);

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
