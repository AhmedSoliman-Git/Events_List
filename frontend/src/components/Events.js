import { Suspense } from "react";
import { defer, json, useRouteLoaderData, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage({ Newevents, giveId }) {
  const { events } = useRouteLoaderData("events-loader-data");
  return (
    <>
      <Suspense fallback={<p style={{ textAlign: "center" }}>...Loading</p>}>
        <Await resolve={giveId ? Newevents : events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json(
      { message: "Error need to be fixed 🛠 !! -- Failed To Fetch" },
      {
        status: 500,
      }
    );
  }

  // return response ; //when we using defer we can't return a response ... we make await resonse.json();
  const resData = await response.json();
  return resData.events;
}

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
