import React from 'react';

export function StateEx() {
  const [name, setName] = React.useState('shriansh');
  React.useEffect(() => {
    setName('Test');
    console.log('===>>> ', name);
  }, []);

  return <span> State Test </span>;
}
