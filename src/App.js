import React, { useState, useEffect } from "react";
import axios from "axios";

import TextInput from "./TextInput.js";
import SearchResult from "./SearchResult.js";
import Authorize from "./Authorize";
import EvenTypePicker from "./EventTypePicker";

import "./app.css";

import catImg from "../src/public/assets/cat-waving.png";

const HTNENDPOINT = "https://api.hackthenorth.com/v3/events";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [eventType, setEventType] = useState("");
  const [isAsc, setIsAsc] = useState(true);

  // json data is stored in the htn state variable
  const [htn, setHtn] = useState(null);

  // unauthorized public users
  const unAuthorizedPublicUsers = !isAuthorized && !eventType;

  // unauthorized public users who picked an event type
  const pickyUnAuthorizedPublicUsers = !isAuthorized && eventType;

  // authorized users who picked an event type
  const pickyAuthorizedUsers = isAuthorized && eventType;

  const availableEvents = unAuthorizedPublicUsers
    ? htn?.filter((event) => event.permission === "public")
    : pickyUnAuthorizedPublicUsers
    ? htn?.filter(
        (event) =>
          event.permission === "public" && event.event_type === eventType
      )
    : pickyAuthorizedUsers
    ? htn?.filter((event) => event.event_type === eventType)
    : // for authorized users
      htn;

  useEffect(() => {
    axios.get(HTNENDPOINT).then((res) => setHtn(res.data));
  }, []);

  console.log(htn);
  return (
    <>
      <header className="nav-bar">
        <img className="cute-cat" alt="cute cat" src={catImg} />
        <div>
          <TextInput
            required={true}
            label="Search"
            placeholder="Event name...🔍"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value.toLowerCase());
            }}
          />
        </div>
        {!isAuthorized && <Authorize setIsAuthorized={setIsAuthorized} />}
      </header>

      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            style={{ maxWidth: "50%", marginTop: "30px" }}
            onClick={() => setIsAsc(!isAsc)}
          >
            Sort date by {isAsc ? "latest " : "earliest "}
          </button>
          <br />
          <p>Pick whichever event you're interested in:</p>
          <br />
          <EvenTypePicker setEventType={setEventType} />
          <br />
          {availableEvents?.length === 0 &&
            `Oh no! There are no events of your chosen event type. 
            You can ${
              !isAuthorized ? "validate and" : ""
            } try checking out other available event types 🙂`}
          {availableEvents &&
            availableEvents
              ?.sort((first, second) => {
                if (isAsc) {
                  // from earliest to latest order by  time
                  return first.start_time - second.start_time;
                } else {
                  // from latest to earliest order by time
                  return second.start_time - first.start_time;
                }
              })
              .filter((result) =>
                result.name.toLowerCase().includes(searchTerm)
              )
              .map((result) => (
                <div key={result.id} className="search-results">
                  <SearchResult
                    result={result}
                    isAuthorized={isAuthorized}
                    fetchedData={htn}
                    eventType={eventType}
                  />
                </div>
              ))}
        </div>
      </main>
    </>
  );
}

export default App;
