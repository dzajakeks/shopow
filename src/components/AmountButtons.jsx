import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AmountButtons = ({ stock }) => {
  const [amount, setAmount] = useState(1);

  function decrease() {
    if (amount <= 1) return;
    setAmount((oldAmount) => oldAmount - 1);
  }

  function increase() {
    if (amount >= stock) return;
    setAmount((oldAmount) => oldAmount + 1);
  }

  return (
    <div className='flex gap-4'>
      <button onClick={() => decrease()}>
        <FaMinus />
      </button>
      <h2 className='accent-text text-2xl'>{amount}</h2>
      <button onClick={() => increase()}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
