import { NavLink } from 'react-router-dom';
import twitterLogo from '../assets/Logo.svg'
import './Sidebar.css'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from "phosphor-react";

export function Sidebar() {
    return(
        <aside className='sidebar'>
        <img className='logo' src={twitterLogo} alt="Logo twitter" />
        
        <nav className='main-navigation'>
          <NavLink to="/"> <House weight='fill' color='#1da1f2' />  <span>Home</span></NavLink>
          <a href=""> <Hash /> <span>Explore</span></a>
          <a href=""> <Bell />  <span>Notifications</span></a>
          <a href=""> <Envelope />  <span>Menssages</span></a>
          <a href=""> <BookmarkSimple /> <span>Bookmarks</span></a>
          <a href=""> <FileText /> <span>Lists</span></a>
          <a href=""> <User /> <span>Profile</span></a>
          <a href=""> <DotsThreeCircle /> <span>More</span></a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
    )
}