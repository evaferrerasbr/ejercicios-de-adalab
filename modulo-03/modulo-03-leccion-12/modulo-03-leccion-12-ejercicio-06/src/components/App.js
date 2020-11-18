import { useState, useEffect } from 'react';
import Form from './Form';
import '../stylesheets/App.scss';

function App() {
  const dataLocal = localStorage.getItem('value');
  const [value, setValue] = useState(dataLocal);

  const handleInput = (inputValue) => {
    setValue(inputValue);
  };

  useEffect(() => {
    localStorage.setItem('value', value);
  });

  return (
    <>
      <form className="App">
        <Form handleInput={handleInput} inputValue={value} />
      </form>
    </>
  );
}

export default App;
