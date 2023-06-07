import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

let newTweet = ''

export function Timeline() {
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Olá mundo'
])

  function createNewTweet(event:FormEvent) {
    event.preventDefault()

    setTweets([...tweets, newTweet])
  }
  
  return(
        <main className='timeline'>
          <Header title="Home" />
          <form onSubmit={createNewTweet} className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" alt="Marcelo Figueiredo" />
              <textarea
                id="tweet"
                placeholder='Whats happening'
                onChange={(event) => 
                  {newTweet = event.target.value}
                }
                /> 
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