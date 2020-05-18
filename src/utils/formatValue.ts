const formatValue = (value: number): string =>
  value ? Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : 'R$ 0,00' // TODO

export default formatValue;
