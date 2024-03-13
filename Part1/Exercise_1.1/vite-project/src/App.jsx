import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const History = (props) => {

    if (props.allClicks.length === 0) {
      return (
        <div>
          <p>The app is used by pressing the buttons</p>
        </div>
      )
    }

    return (
      <div>
        <p>
          Button press history: {props.allClicks.join(' ')}
        </p>
      </div>
    )
  }

  const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updateLeft = left + 1
    setLeft(updateLeft)
    setTotal(right + updateLeft)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updateRight = right + 1
    setRight(updateRight)
    setTotal(updateRight + left)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='Left'/>
      <Button handleClick={handleRightClick} text='Right'/>
      {right}
      <p>Total: {total}</p>
      <History allClicks={allClicks}/> 
    </div>
  )
}

export default App