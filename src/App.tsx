import { useState } from 'react'
import './App.css'

function App() {
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState(0)
  const [price, setPrice] = useState(0)

  // Calculate total
  const total = quantity * price

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <p>Item: {item}</p>

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <p>Quantity: {quantity}</p>

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <p>Price: {price}</p>

        <p>Total: {total}</p>
      </div>
    </>
  )
}

export default App
