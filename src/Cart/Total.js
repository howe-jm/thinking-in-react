const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Total(props) {
  const total = Object.keys(props.selectedState).reduce((acc, curr) => acc + props.selectedState[curr].cost, 0);
  return USCurrencyFormat.format(total);
}
