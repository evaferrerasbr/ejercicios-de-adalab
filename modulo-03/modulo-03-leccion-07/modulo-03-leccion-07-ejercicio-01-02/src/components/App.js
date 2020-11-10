import React, { useState } from 'react';
import Birthday from './Birthday';
import Gift from './Gift';

function App() {
  const [age, setAge] = useState(28);
  const [gift, setGift] = useState(0);

  const handleAge = () => {
    setAge(age + 1);
  };

  const handleGift = () => {
    setGift(gift + 1);
  };

  return (
    <div className="App">
      <Birthday getAge={handleAge} age={age} />
      <Gift getGift={handleGift} gift={gift} />
    </div>
  );
}

export default App;
