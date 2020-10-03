import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat';

export default function Total(props) {
  const total = Object.keys(props.selectedState).reduce((acc, curr) => acc + props.selectedState[curr].cost, 0);
  return (
    <div className='summary-container'>
      <div className='summary__total'>
        <div className='summary__total__label'>Total</div>
        <div className='summary__total__value'>{USCurrencyFormat.format(total)}</div>
      </div>
    </div>
  );
}
