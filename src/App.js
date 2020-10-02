import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Features from './FeaturesForm/Features';
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
          <form className='main__form'>
            <h2>Customize your laptop</h2>
            <Features updateFeats={this.updateFeature} selectedState={this.state.selected} features={this.props.features} />
          </form>
          <section className='main__summary'>
            <h2>Your cart</h2>
            <Summary selectedState={this.state.selected} />
            <div className='summary__total'>
              <div className='summary__total__label'>Total</div>
              <div className='summary__total__value'>
                <Total selectedState={this.state.selected} />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
