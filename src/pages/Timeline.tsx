import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

const tweets = [
    'Meu primeiro tweet',
    'Olá mundo'
]

export function Timeline() {
    return(
        <main className='timeline'>
          <Header title="Home" />
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" alt="Marcelo Figueiredo" />
              <textarea id="tweet" placeholder='Whats happening'></textarea>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <Separator />

          {tweets.map(tweets => {
          return <Tweet key={tweets} content={tweets} />
          })}
        </main>
    )
}