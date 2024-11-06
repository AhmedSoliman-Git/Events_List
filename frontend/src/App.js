import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import NewEventPage from "./pages/NewEventPage";
import Events, { loader as eventsLoader} from "./components/Events";
import EventDetailPage, { loader as eventItemLoader} from "./pages/EventDetailPage";
import ErrorElement from "./components/ErrorElement";
import Newsletter from './components/Newsletter'
import EventsNavigation from "./components/EventsNavigation";
import EditEventPage from "./pages/EditEventPage";
import { action as FormAction } from './components/EventForm' ;
import { action as DeleteAction } from './pages/EventDetailPage';
import { action as newsLetterAction } from "./components/Newsletter";


const router = createBrowserRouter([
  {path : "", 
  element : <RootLayout />, 
  errorElement : <ErrorElement /> , 
  children : [
    {index: true , element : <HomePage />},
    {path : "NewsLetter", element : <Newsletter /> , action : newsLetterAction},
    {path : "events" ,
      id:'events-loader-data',
      loader : eventsLoader ,
      element : <EventsNavigation />,
      children : [
        {index : true , element : <Events />},
        {path : "new" , element : <NewEventPage />, action : FormAction},
        {path : ":eventId" , 
          loader :eventItemLoader ,
          id:"Item-loader-Data",
            children : [
              {path : "EventDetail", element : <EventDetailPage />,action:DeleteAction  },
              {path : "edit", element : <EditEventPage /> , action : FormAction}
            ]
        }]},



    ]},
  ]
)
function App() {
  return <RouterProvider router={router} />
}

export default App;
