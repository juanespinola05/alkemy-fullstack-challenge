import { PriceInt, PriceDec } from './priceStyles.js'

const isInt = (n) => {
  return Number(n) === n && n % 1 === 0
}
const getIntAndDecParts = (price) => {
  const [int, dec] = price.split('.')
  return (
    <>
      {int}
      <PriceDec>.{dec}</PriceDec>
    </>
  )
}

const Price = ({ children }) => {
  const amount = isInt(parseFloat(children))
    ? children
    : getIntAndDecParts(children)

  return (
    <PriceInt>
      $ {amount}
    </PriceInt>
  )
}

export { Price }
