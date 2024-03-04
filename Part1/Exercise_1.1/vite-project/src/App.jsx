import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaserByOne = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  const Display = ({counter}) => <div>{counter}</div>

  const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>
  
  return (
    <div>
      <Display counter={counter}/>
      <Button onSmash={increaseByOne} text="Plus"/>
      <Button onSmash={decreaserByOne} text="Minus"/>
      <Button onSmash={setZero} text="Zero"/>
    </div>
  )
}

export default App