import classes from './EventsNavigation.module.css';
import { NavLink, Outlet } from 'react-router-dom'
function EventsNavigation() {
  return (
    <>
      <nav style={{
        textAlign :"center" ,
        display:"flex", 
        justifyContent : "center"
      }}>
        <ul className={classes.list}>
          <li>
            <NavLink to="" end className={({isActive})=> isActive ? classes.active : undefined }>All Events</NavLink>
          </li>

          <li>
            <NavLink to="new" className={({isActive})=> isActive ? classes.active : undefined }>New Event</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />

      </>
  );
}

export default EventsNavigation;
