import USCurrencyFormat from '../USCurrencyFormat';

export default function Total(props) {
  const total = Object.keys(props.selectedState).reduce((acc, curr) => acc + props.selectedState[curr].cost, 0);
  return USCurrencyFormat.format(total);
}
