export const FormatCurrency = (
  value: number | string,
  currencyText?: boolean,
  minFractDigits?: number,
  maxFractDigits?: number,
) => {
  const floatValue: number =
    typeof value === 'string' ? parseFloat(value) : value
  const convertedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: minFractDigits || 2,
    maximumFractionDigits: maxFractDigits || 2,
  }).format(floatValue)

  return !currencyText ? convertedValue : convertedValue.split(' ')[1]
}
