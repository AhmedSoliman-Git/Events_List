import { NavLink } from 'react-router-dom';
import classes from "./Header.module.css"
import NewsletterSignup from '../components/NewsletterSignup';
export default function Header(){
    return <header className={classes.header}>
        
        <ul>
            <li><NavLink to='' className={({ isActive })=> isActive ? classes.active : undefined }>Home</NavLink></li>
            <li><NavLink to='events' className={({isActive})=> isActive ? classes.active : undefined }>Events Page</NavLink></li>
            <li><NavLink to='NewsLetter' className={({isActive})=> isActive ? classes.active : undefined }>NewsLetter Page</NavLink></li>
        </ul>
        <div>
            <NewsletterSignup />
        </div>

    </header>
}