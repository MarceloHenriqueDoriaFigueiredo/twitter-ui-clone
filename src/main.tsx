import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/Logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from 'phosphor-react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo twitter" />
        
        <nav className='main-navigation'>
          <a href=""> <House weight='fill' color='#1da1f2' />  Home</a>
          <a href=""> <Hash /> Explore</a>
          <a href=""> <Bell />  Notifications</a>
          <a href=""> <Envelope />  Menssages</a>
          <a href=""> <BookmarkSimple/> Bookmarks</a>
          <a href=""> <FileText/> Lists</a>
          <a href=""> <User/> Profile</a>
          <a href=""> <DotsThreeCircle/> More</a>
        </nav>

        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>

      <div className="content">
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle />
          </div>

          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/MarceloHenriqueDoriaFigueiredo.png" alt="Marcelo Figueiredo" />
              <textarea id="tweet" placeholder='Whats happening'></textarea>
            </label>

            <button type='submit'>Tweet</button>
          </form>

          <div className="separator" />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
