import React from 'react';
import { Link } from 'react-router-dom';

function Relax() {
  return (
    <>
      <div>Relax</div>
      <Link to="/counter">¿Te quieres volver a estresar?</Link>
    </>
  );
}

export default Relax;
