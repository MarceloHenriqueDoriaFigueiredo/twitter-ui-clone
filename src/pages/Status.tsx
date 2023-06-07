import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

const answers = [
    'Concordo',
    'Faz sentido',
    'Parabéns',
]

export function Status() {
    return(
        <main className='status'>
          <Header title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque." />

            <Separator />

          <form className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" alt="Marcelo Figueiredo" />
              <textarea id="tweet" placeholder='Tweet you answer'></textarea>
            </label>

            <button type='submit'>Answer</button>
          </form>

          {answers.map(answer => {
          return <Tweet key={answer} content={answer} />
          })}
        </main>
    )
}