import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

export default function EditEventPage(){
    const {event} = useRouteLoaderData('Item-loader-Data');
    return <EventForm event={event} method="PATCH" edited= {true}/>
}