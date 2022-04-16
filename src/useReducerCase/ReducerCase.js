import React from 'react';
import { useUndo } from './useUndo';

export function ReducerCase() {
  const [state, { set }] = useUndo('first');

  React.useEffect(() => {
    set('second');
  }, []);

  React.useEffect(() => {
    set('third');
  }, []);

  return <pre>{JSON.stringify(state)}</pre>;
}
