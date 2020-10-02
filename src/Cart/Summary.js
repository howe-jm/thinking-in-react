import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Summary(props) {
  return Object.keys(props.selectedState).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = props.selectedState[feature];

    return (
      <div className='summary__option' key={featureHash}>
        <div className='summary__option__label'>{feature} </div>
        <div className='summary__option__value'>{selectedOption.name}</div>
        <div className='summary__option__cost'>{USCurrencyFormat.format(selectedOption.cost)}</div>
      </div>
    );
  });
}
