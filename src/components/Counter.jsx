import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    if (count === 3) {
        throw new Error('¡Error! El contador llegó a 3.');
      }
  }, [count])

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default Counter;

