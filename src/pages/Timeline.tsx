import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Olá mundo'
])

  function createNewTweet(event:FormEvent) {
    event.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweet('')
  }

  function handleHotKeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([...tweets, newTweet])
      setNewTweet('')
    }
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
                onKeyDown={handleHotKeySubmit}
                value={newTweet}
                onChange={(event) => 
                  setNewTweet(event.target.value)
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