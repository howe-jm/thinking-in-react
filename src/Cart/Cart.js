import React from 'react';
import Summary from './Summary';
import Total from './Total';

export default function Cart(props) {
  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      <Summary selectedState={props.selectedState} />
      <div className='summary__total'>
        <div className='summary__total__label'>Total</div>
        <div className='summary__total__value'>
          <Total selectedState={props.selectedState} />
        </div>
      </div>
    </section>
  );
}
