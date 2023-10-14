import React, { useState } from 'react';
import AgeCalculator from './AgeCalculator';

function App() {
  const [age, setAge] = useState('');

  return (
    <div>
      <AgeCalculator age={age} setAge={setAge} />
    </div>
  );
}

export default App;
