import React from 'react';

const InputText = (props) => {
  const handleKeyUp = (ev) => {
    const inputName = props.name;
    const inputValue = ev.currentTarget.value;
    props.handleInput(inputName, inputValue);
  };

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        name={props.name}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default InputText;
