import { Form, useNavigate, useNavigation, json, redirect } from 'react-router-dom';
import { useState } from 'react';
import classes from './EventForm.module.css';

function EventForm({ method, event, edited }) {
  const navigate = useNavigate();
  const [initailState , setState] = useState([]);
  function cancelHandler() {
    navigate('/events');
  }



if(edited) {
  const mainData = event.then((data=>{
    let importantData = data ;
    mainFunction(importantData) ; 
  }
))

function mainFunction(data){
setState(data)

}
}


  

  const isSubmitting = useNavigation().state === 'submitting' ;


  
  return (
    <Form method={method} className={classes.form} >
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue = {event ? initailState.title : ""} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue = {event ? initailState.image : ""}/>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue = {event ? initailState.date : ""}/>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue = {event ? initailState.description : ""}/>
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button>{isSubmitting ? "isSubmitting" : "Save"}</button>
      </div>
    </Form>
  );
}

export default EventForm;



export async function action({request,params}){
  let url = "http://localhost:8080/events" ;
  const method = request.method ;
  const id = params.eventId ;

  const data = await request.formData();
  
  const eventData = {
      title : data.get('title'),
      image : data.get('image'),
      date : data.get('date'),
      description : data.get('description')
  } ;



  if(method === "PATCH") {
    url = "http://localhost:8080/events/"+ id ;
  }
  const response = await fetch(url , {
    method : method ,
    headers : {
      'Content-Type' : 'application/json'
    } ,
    body : JSON.stringify(eventData)
  })

  if(response.status === 422){ // 422 is in backend here so not common
    return response ;
  }

  if(!response.ok) {
    throw json({message: "Failed to Did the Process 🛠"},{
        status : 500
    })
} else return redirect("/events")

}

