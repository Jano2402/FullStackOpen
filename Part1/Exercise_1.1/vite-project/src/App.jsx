import { useState } from 'react'

const Statistics = ({text, value}) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td width="100">{text}</td>
              <td width="100">{value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}

const Button = ({handleClikc, text}) => {
  return (
    <button onClick={handleClikc}>
      {text}
    </button>
  )
}

const Total = ({good, bad, neutral}) => {
  const total = bad + good + neutral;
  const average = (good - bad) / total;
  const positive = (good / total)*100;

  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <div>
        <Statistics text="good" value={good}/> 
        <Statistics text="neutral" value={neutral}/> 
        <Statistics text="bad" value={bad}/> 
        <Statistics text="all" value={total}/> 
        <Statistics text="average" value={average}/> 
        <Statistics text="positive" value={positive}/>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = [0, 0, 0, 0, 0, 0, 0, 0]

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(votes)

  const handleGoodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
  }

  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
  }

  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
  }

  const handleAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const handleVoteClick = () => {
    const copy = [...voted]
    copy[selected] += 1
    setVoted(copy)
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <p>has {voted[selected]} votes</p>
        <Button handleClikc={handleVoteClick} text={'vote'}/>
        <Button handleClikc={handleAnecdoteClick} text={'next anecdote'}/>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[voted.indexOf(Math.max(...voted))]}</p>
        <p>has {voted[voted.indexOf(Math.max(...voted))]} votes</p>
      </div>
    
      <h1>Give Feedback</h1>
      <Button handleClikc={handleGoodClick} text={'Good'}/>
      <Button handleClikc={handleNeutralClick} text={'Neutral'}/>
      <Button handleClikc={handleBadClick} text={'Bad'}/>
      <h2>Statistics</h2>
      <Total good={good} bad={bad} neutral={neutral}/> 
    </div>
  )
}

export default App