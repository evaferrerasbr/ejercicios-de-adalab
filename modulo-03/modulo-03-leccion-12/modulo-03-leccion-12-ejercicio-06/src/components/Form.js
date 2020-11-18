import React from 'react';
import '../stylesheets/App.scss';

function Form(props) {
  const handleInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    props.handleInput(inputValue);
  };

  return <input type="text" onChange={handleInput} value={props.inputValue} />;
}

export default Form;
