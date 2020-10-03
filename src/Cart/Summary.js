import React from 'react';
import USCurrencyFormat from '../USCurrencyFormat';

export default function Summary(props) {
  return Object.keys(props.selectedState).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selectedState[feature];

    return (
      <div className='cart-container'>
        <div className='summary__option' key={featureHash}>
          <div className='summary__option__label'>{feature} </div>
          <div className='summary__option__value'>{selectedOption.name}</div>
          <div className='summary__option__cost'>{USCurrencyFormat.format(selectedOption.cost)}</div>
        </div>
      </div>
    );
  });
}
