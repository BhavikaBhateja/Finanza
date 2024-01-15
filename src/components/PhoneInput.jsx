import React, { useState } from 'react';

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className="phone-input-container">
      <input 
        type="tel" 
        className="phone-input" 
        value={phoneNumber}
        onChange={handleChange}
      />
    </div>
  );
}

export default PhoneNumberInput;
