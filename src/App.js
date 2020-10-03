import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import FeaturesForm from './FeaturesForm/FeaturesForm';
import Features from './FeaturesForm/Features';
import Cart from './Cart/Cart';
import Summary from './Cart/Summary';
import Total from './Cart/Total';

class App extends Component {
  state = {
    selected: {
      Processor: this.props.features.Processor[0],
      'Operating System': this.props.features['Operating System'][0],
      'Video Card': this.props.features['Video Card'][0],
      Display: this.props.features.Display[0],
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
            <Features updateFeats={this.updateFeature} selectedState={this.state.selected} features={this.props.features} />
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
