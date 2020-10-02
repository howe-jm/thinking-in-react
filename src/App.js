import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import STORE from './STORE';
import Header from './Header/Header';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

class App extends Component {
  state = {
    selected: {
      Processor: STORE.FEATURES.Processor[0],
      'Operating System': STORE.FEATURES['Operating System'][0],
      'Video Card': STORE.FEATURES['Video Card'][0],
      Display: STORE.FEATURES.Display[0],
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
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className='feature__item'>
            <input type='radio' id={itemHash} className='feature__option' name={slugify(feature)} checked={item.name === this.state.selected[feature].name} onChange={(e) => this.updateFeature(feature, item)} />
            <label htmlFor={itemHash} className='feature__label'>
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className='feature' key={featureHash}>
          <legend className='feature__name'>
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className='summary__option' key={featureHash}>
          <div className='summary__option__label'>{feature} </div>
          <div className='summary__option__value'>{selectedOption.name}</div>
          <div className='summary__option__cost'>{USCurrencyFormat.format(selectedOption.cost)}</div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce((acc, curr) => acc + this.state.selected[curr].cost, 0);

    return (
      <div className='App'>
        <Header />
        <main>
          <form className='main__form'>
            <h2>Customize your laptop</h2>
            {features}
          </form>
          <section className='main__summary'>
            <h2>Your cart</h2>
            {summary}
            <div className='summary__total'>
              <div className='summary__total__label'>Total</div>
              <div className='summary__total__value'>{USCurrencyFormat.format(total)}</div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
