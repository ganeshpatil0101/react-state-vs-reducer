import React from 'react';
import { undoReducer } from './undoReducer';

export function useUndo(initialPresent) {
  const [state, dispatch] = React.useReducer(undoReducer, {
    past: [],
    present: initialPresent,
    future: [],
  });

  const canUndo = state.past.lenght !== 0;
  const canRedu = state.future.lenght !== 0;
  const undo = React.useCallback(() => dispatch({ type: 'UNDO' }), []);
  const redo = React.useCallback(() => dispatch({ type: 'REDO' }), []);
  const set = React.useCallback(
    (newPresent) => dispatch({ type: 'SET', newPresent }),
    []
  );
  const reset = React.useCallback(() => dispatch({ type: 'RESET' }));

  return [state, { set, reset, undo, redo, canRedu, canUndo }];
}
