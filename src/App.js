import React, { Component } from 'react';
import './App.css';
import FEATURES from './STORE';
import Header from './Header/Header';
import FeaturesForm from './FeaturesForm/FeaturesForm';
import Features from './FeaturesForm/Features';
import Cart from './Cart/Cart';
import Summary from './Cart/Summary';
import Total from './Cart/Total';

class App extends Component {
  state = {
    selected: {
      Processor: FEATURES.Processor[0],
      'Operating System': FEATURES['Operating System'][0],
      'Video Card': FEATURES['Video Card'][0],
      Display: FEATURES.Display[0],
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <FeaturesForm>
            <Features updateFeats={this.updateFeature} selectedState={this.state.selected} features={FEATURES} />
          </FeaturesForm>
          <Cart>
            <Summary selectedState={this.state.selected} />
            <Total selectedState={this.state.selected} />
          </Cart>
        </main>
      </div>
    );
  }
}

export default App;
