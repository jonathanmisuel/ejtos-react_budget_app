import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCurr, setCurr] = useState(currency);

  const handleCurrencyChange = (event) => {
      dispatch({
          type: 'CHG_CURRENCY',
          payload: event.target.value });
  };
  
  useEffect(() => {
    //alert(newCurr);
  }, [newCurr]);

  return (
    <div>
      <label htmlFor="currency-selector">Currency:</label>
      <select id="currency-selector" style={{ backgroundColor: 'green' }} onChange={handleCurrencyChange}>
        <option value="£">£ Pound</option>
        <option value="$">$ Dollar</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Rupee</option>
      </select>
    </div>
  );
};

export default CurrencySelector;