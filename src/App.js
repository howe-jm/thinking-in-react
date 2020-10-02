import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Feature from './FeaturesForm/Feature';
import Cart from './Cart/Cart';

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
          <form className='main__form'>
            <Feature updateFeats={this.updateFeature} selectedState={this.state.selected} features={this.props.features} />
          </form>
          <Cart selectedState={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
