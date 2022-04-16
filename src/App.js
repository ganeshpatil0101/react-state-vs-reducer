import React from 'react';
import './style.css';
import useDarkMode from './useDarkMode';
import {ReducerCase} from './useReducerCase/ReducerCase';
const style = {
  dark: {
    color: 'white',
    backgroundColor: 'black',
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
};
export default function App() {
  const [mode, setMode] = useDarkMode();
  return (
    <div style={style[mode]}>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
        {' '}
        Change Mode{' '}
      </button>
      <br />
      {mode}
      <br/>
      <ReducerCase />
    </div>
  );
}
