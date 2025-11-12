import { useState } from 'react'

import './App.css'

function App() {
  function handleIncreaseItems(){
    return
  }
  
  const [item, setItem] = useState(0)
  const[quantity,setQuantity]=useState(0)
  const[price,setPrice]=useState(0)  

  const total=()=>{
    const q=(quantity)
    const p=(price)
    return q*p
  }

  return (
    <>
    <div>
      <input type="text"placeholder='item'/>
      <input type="text"placeholder='quantity' />
      <input type="text"placeholder='price' />
      <input type="text"placeholder='Total' />
      <button onClick={handleIncreaseItems}>updateItems</button>
      
      
    </div>
    </>
  )
}

export default App
