import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

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

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([...answers, newAnswers,])
      setNewAnswer('')
    }
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
                onKeyDown={handleHotKeySubmit}
                onChange={(event) => {
                  setNewAnswer(event.target.value)
                }}
                >
              </textarea>
            </label>

            <button type='submit'>
              <PaperPlaneRight/>
              <span>Answer</span>
            </button>
          </form>

          {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
          })}
        </main>
    )
}