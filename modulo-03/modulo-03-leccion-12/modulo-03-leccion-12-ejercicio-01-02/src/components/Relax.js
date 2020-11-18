import React from 'react';
import { Link } from 'react-router-dom';

class Relax extends React.Component {
  render() {
    return (
      <>
        <div>Relax</div>
        <Link to="/counter">¿Te quieres volver a estresar?</Link>
      </>
    );
  }
}

export default Relax;
