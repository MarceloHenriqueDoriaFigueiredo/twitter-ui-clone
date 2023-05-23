import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className="content">
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
        </main>

        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  </React.StrictMode>,
)
