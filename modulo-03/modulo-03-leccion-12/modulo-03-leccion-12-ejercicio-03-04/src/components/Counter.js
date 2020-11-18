import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Counter = () => {
  console.log('me estoy renderizando');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('me estoy montando (en el dólar)');
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    return () => {
      console.log('me estoy desmontando');
      clearInterval(intervalId);
    };
  });

  return (
    <>
      <div>Contador: {counter}</div>
      <Link to="/relax">¿Te quieres relajar un ratete?</Link>
    </>
  );
};

export default Counter;
