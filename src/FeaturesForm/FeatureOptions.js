import React from 'react';
import slugify from 'slugify';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function options(props) {
  return props.features[feature].map((item) => {
    const itemHash = slugify(JSON.stringify(item));
    return (
      <div key={itemHash} className='feature__item'>
        <input type='radio' id={itemHash} className='feature__option' name={slugify(feature)} checked={item.name === props.selectedState[feature].name} onChange={(e) => props.updateFeats(feature, item)} />
        <label htmlFor={itemHash} className='feature__label'>
          {item.name} ({USCurrencyFormat.format(item.cost)})
        </label>
      </div>
    );
  });
}
