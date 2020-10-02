import React from 'react';
import FeaturesForm from './FeaturesForm';

export default function Feature(props) {
  return (
    <form className='main__form'>
      <h2>Customize your laptop</h2>
      <FeaturesForm updateFeats={props.updateFeats} selectedState={props.selectedState} features={props.features} />
    </form>
  );
}
