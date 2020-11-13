import React, { useState } from 'react';
import Form from './Form';
import Card from './Card';
import '../stylesheets/App.scss';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [lang, setLang] = useState('');
  const [ages, setAges] = useState('');
  const [gen, setGen] = useState([]);

  function handleChange(input, value) {
    if (input === 'name') {
      setName(value);
    } else if (input === 'description') {
      setDescription(value);
    } else if (input === 'lang') {
      setLang(value);
    } else if (input === 'ages') {
      setAges(value);
    } else if (input === 'gen') {
      if (gen.includes(value)) {
        const index = gen.findIndex((genItem) => genItem === value);
        gen.splice(index);
      } else {
        setGen([...gen, value]);
      }
    }
  }

  return (
    <div className="App">
      <Form
        name={name}
        description={description}
        lang={lang}
        ages={ages}
        handleChange={handleChange}
      />
      <Card
        name={name}
        description={description}
        lang={lang}
        ages={ages}
        gen={gen}
      />
    </div>
  );
}

export default App;
