import { NavLink } from 'react-router-dom';
import twitterLogo from '../assets/Logo.svg'
import './Sidebar.css'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";

export function Sidebar() {
    return(
        <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo twitter" />
        
        <nav className='main-navigation'>
          <NavLink to="/"> <House weight='fill' color='#1da1f2' />  Home</NavLink>
          <a href=""> <Hash /> Explore</a>
          <a href=""> <Bell />  Notifications</a>
          <a href=""> <Envelope />  Menssages</a>
          <a href=""> <BookmarkSimple /> Bookmarks</a>
          <a href=""> <FileText /> Lists</a>
          <a href=""> <User /> Profile</a>
          <a href=""> <DotsThreeCircle /> More</a>
        </nav>

        <button className='new-tweet' type='button'>
          Tweet
        </button>
      </aside>
    )
}