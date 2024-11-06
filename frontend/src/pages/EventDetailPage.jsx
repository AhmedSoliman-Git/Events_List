import { Suspense } from 'react';
import { useRouteLoaderData, json,redirect ,Await, defer } from 'react-router-dom';
import EventItem from '../components/EventItem' ;
import Events from '../components/Events'
export default function EventDetailPage(){
    const {event,events} = useRouteLoaderData('Item-loader-Data');
    
    return <>
    <Suspense fallback ={<p style={{textAlign:"center"}}>...Loading</p>}>
        <Await resolve={event}>
            {(loadedData)=> <EventItem event={loadedData}/> }
        </Await>
    </Suspense>

    <Suspense fallback ={<p style={{textAlign:"center"}}>...Loading</p>}>
        <Await resolve={events}>
            {(loadedData)=> <Events giveId={true} Newevents = {loadedData}/> }
        </Await>
    </Suspense>





    </>
}

export async function action({request,params}){
    const id = params.eventId ;
    const response = await fetch('http://localhost:8080/events/'+ id ,{
    method : request.method 
    }) 

    if(!response.ok) {
    throw json({message: "Failed to Delete the Item 🛠"},{
        status : 500
    })
}
else return redirect("/events")
}



async function loadEvent(id){
const response = await fetch('http://localhost:8080/events/' + id);

if(!response.ok) {
    throw json({message : "Failed to get Item Data 🛠"},
    {status : 500}
    )
}

const resData = await response.json();
return resData.event ;

}



async function loadEvents(id){
    const response = await fetch('http://localhost:8080/events') ;

    if(!response.ok) {
    throw json({ message:"Error need to be fixed 🛠 !! -- Failed To Fetch" } ,{
        status : 500
    })
    }

    // return response ; //when we using defer we can't return a response ... we make await resonse.json();
    const resData = await response.json();
    const dataFiltered = resData.events.filter((el)=> el.id !== id );

    return dataFiltered ;
} 


export function loader({request , params}){
    const id = params.eventId ;
        return defer({
            events: loadEvents(id),
            event :loadEvent(id),
    })}