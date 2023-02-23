import React from "react";

// This component returns event type tags
const EventType = ({ eventType }) => {
  let eventColor = "";

  switch (eventType) {
    case "main_event":
      eventColor = "#43afde";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Main Event{" "}
          <span role="img" aria-label="fire-emoji">
            🔥
          </span>
        </div>
      );
    case "workshop":
      eventColor = "#8a50b2";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Workshop{" "}
          <span role="img" aria-label="tools-emoji">
            ⚒️
          </span>
        </div>
      );
    case "activity":
      eventColor = "#f59e0b";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Activity{" "}
          <span role="img" aria-label="masks-emoji">
            🎭
          </span>
        </div>
      );
    case "meetup":
      eventColor = "#d95858";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Meetup{" "}
          <span role="img" aria-label="people-gathering-emoji">
            👥
          </span>
        </div>
      );
    case "sponsor":
      eventColor = "#bd63cf";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Sponsor{" "}
          <span role="img" aria-label="lightning-bolt-emoji">
            ⚡
          </span>
        </div>
      );
    case "tech_talk":
      eventColor = "#8390a3";
      return (
        <div className="event-type" style={{ backgroundColor: eventColor }}>
          Tech Talk{" "}
          <span role="img" aria-label="microphone-emoji">
            🎤
          </span>
        </div>
      );
    default:
      return "";
  }
};

export default EventType;
