import React, { useState } from 'react';

function AgeCalculator({ age, setAge }) {
  const [dob, setDob] = useState(new Date());

  const calculateAge = () => {
    const today = new Date();
    const ageInYears = today.getFullYear() - dob.getFullYear();
    setAge(ageInYears);
  };

  const validateDob = (e) => {
    const dobString = e.target.value;
    if (!dobString) {
      return;
    }

    const dobDate = new Date(dobString);

    // Check if the input is a valid date
    if (isNaN(dobDate.getTime())) {
      alert('Invalid date of birth');
    } else {
      setDob(dobDate);
    }
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <input
        type="date"
        className="age-calculator-input"
        value={dob.toISOString().split('T')[0]} // Format the date for the input field
        onChange={validateDob}
      />
      <button type="button" className="age-calculator-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age && <div className="age-calculator-result">You are {age} years old.</div>}
    </div>
  );
}

export default AgeCalculator;
