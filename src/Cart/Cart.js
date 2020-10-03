import React from 'react';

export default function Cart({ children }) {
  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      {children}
    </section>
  );
}
