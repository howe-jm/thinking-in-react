import React from 'react';

export default function FeaturesForm({ children }) {
  return (
    <form className='main__form'>
      <h2>Customize your laptop</h2>
      {children}
    </form>
  );
}
