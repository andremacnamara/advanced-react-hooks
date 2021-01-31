// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  const { type, step } = action;
  switch(type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  };
  // ...state,
  // ...(typeof action === 'function' ? action(state) : action)
};

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {count: initialCount});

  const {count} = state;
  // const increment = () => setState({ count: count + step});
  // const increment = () =>
  // setState(currentState => ({count: currentState.count + step}))
  const increment = () => dispatch({type: 'increment', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

// const [state, setState] = React.useReducer(countReducer, {
//   count: initialCount,
// })
// const {count} = state
// const increment = () => setState({count: count + step})