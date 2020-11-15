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
  const [preview, setPreview] = useState('');

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
      if (!gen.includes(value)) {
        setGen([...gen, value]);
      } else {
        const index = gen.indexOf(value);
        if (index !== -1) {
          gen.splice(index, 1);
          setGen([...gen]);
        }
      }
    }
  }

  function handleFile(file) {
    if (file !== '') {
      setPreview(file);
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
        handleFile={handleFile}
      />
      <Card
        name={name}
        description={description}
        lang={lang}
        ages={ages}
        gen={gen}
        image={preview}
      />
    </div>
  );
}

export default App;
