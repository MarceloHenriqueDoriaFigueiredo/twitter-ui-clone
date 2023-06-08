import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status() {

  const [newAnswers, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'E verdade',
    'Também concordo!',
])

  function createNewAnswer(event:FormEvent) {
    event.preventDefault()

    setAnswers([...answers, newAnswers,])
    setNewAnswer('')
  }
    return(
        <main className='status'>
          <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque." />

            <Separator />

          <form onSubmit={createNewAnswer} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" alt="Marcelo Figueiredo" />
              <textarea 
                id="tweet" 
                placeholder='Tweet you answer'
                value={newAnswers}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                >
              </textarea>
            </label>

            <button type='submit'>Answer</button>
          </form>

          {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
          })}
        </main>
    )
}