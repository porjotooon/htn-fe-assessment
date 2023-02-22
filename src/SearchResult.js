import React from "react";

// util
import useToggle from "./use-toggle";

import Modal from "./Modal";
import EventType from "./EventType";
import Sparkles from "./Sparkles";

function SearchResult({ result, isAuthorized, fetchedData, setEventType }) {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);

  const options = { hour: "numeric", minute: "numeric" };

  const startDate = new Date(result.start_time);
  const eventStartTime = startDate.toLocaleTimeString("en-US", options);

  const endDate = new Date(result.end_time);
  const eventEndTime = endDate.toLocaleTimeString("en-US", options);

  // template for event that is to be returned
  const event = (
    <article className="search-result">
      <div className="description">
        <span className="event">
          <div className="name">
            <Sparkles>{result.name}</Sparkles>
            {result.public_url && (
              <a href={result.public_url} target="_blank" rel="noreferrer">
                <span role="img" aria-label="link">
                  {" "}
                  🔗
                </span>
              </a>
            )}
            {isAuthorized && result.private_url && (
              <a href={result.private_url} target="_blank" rel="noreferrer">
                <span role="img" aria-label="link">
                  {" "}
                  🔓
                </span>
              </a>
            )}
          </div>
          <EventType eventType={result.event_type} />
        </span>
        {result.speakers[0] && (
          <p className="author">
            Hosted by <b>{result.speakers[0].name}</b>
          </p>
        )}
        <p>{startDate.toDateString()}</p>
        <p>
          {eventStartTime} - {eventEndTime}
        </p>
        <p className="abstract">{result.description}</p>
        <br />
        {isModalOpen && (
          <Modal title="Related events" handleDismiss={toggleIsModalOpen}>
            {result.related_events.map((id) => (
              <p>
                <div className="name">
                  {fetchedData.find((event) => event.id === id)?.name}
                </div>{" "}
                @
                {new Date(
                  fetchedData.find((event) => event.id === id)?.start_time
                ).toLocaleTimeString("en-US", options)}{" "}
                on{" "}
                {new Date(
                  fetchedData.find((event) => event.id === id)?.start_time
                ).toDateString()}
                <EventType
                  eventType={
                    fetchedData.find((event) => event.id === id)?.event_type
                  }
                />
                <br />{" "}
              </p>
            ))}
          </Modal>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
          }}
        >
          <button onClick={toggleIsModalOpen}>Check out related events!</button>
          {isAuthorized && result.permission === "private" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span role="img" aria-label="key=emoji">
                🗝️
              </span>
              <p>Private Event</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  return event;
}

export default SearchResult;
