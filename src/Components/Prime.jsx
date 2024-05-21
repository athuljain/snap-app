import React, { useState } from 'react';

const PrimeChecker = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setResult('Please enter a valid number');
      return;
    }
    setResult(isPrime(num) ? `${num} is a prime number` : `${num} is not a prime number`);
  };

  const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Prime Number Checker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default PrimeChecker;
