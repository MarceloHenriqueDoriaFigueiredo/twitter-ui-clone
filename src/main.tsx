import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import twitterLogo from './assets/Logo.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'

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
        content
      </div>
    </div>
  </React.StrictMode>,
)
