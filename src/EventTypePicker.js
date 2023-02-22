import React from "react";

// This component returns the event type tag picker buttons
const EvenTypePicker = ({ setEventType }) => {
  return (
    <span>
      <button
        style={{ backgroundColor: "#43afde" }}
        onClick={() => setEventType("main_event")}
      >
        Main Event{" "}
        <span role="img" aria-label="fire-emoji">
          🔥
        </span>
      </button>
      <button
        style={{ backgroundColor: "#8a50b2" }}
        onClick={() => setEventType("workshop")}
      >
        Workshop{" "}
        <span role="img" aria-label="tools-emoji">
          ⚒️
        </span>
      </button>
      <button
        style={{ backgroundColor: "#f59e0b" }}
        onClick={() => setEventType("activity")}
      >
        Activity{" "}
        <span role="img" aria-label="masks-emoji">
          🎭
        </span>
      </button>
      <button
        style={{ backgroundColor: "#d95858" }}
        onClick={() => setEventType("meetup")}
      >
        Meetup{" "}
        <span role="img" aria-label="people-gathering-emoji">
          👥
        </span>
      </button>
      <button
        style={{ backgroundColor: "#bd63cf" }}
        onClick={() => setEventType("sponsor")}
      >
        Sponsor{" "}
        <span role="img" aria-label="lightning-bolt-emoji">
          ⚡
        </span>
      </button>
      <button
        style={{ backgroundColor: "#8390a3" }}
        onClick={() => setEventType("tech_talk")}
      >
        Tech Talk{" "}
        <span role="img" aria-label="microphone-emoji">
          🎤
        </span>
      </button>
      <button
        style={{ backgroundColor: "#43de53" }}
        onClick={() => setEventType("")}
      >
        All events{" "}
        <span role="img" aria-label="smirk-emoji">
          😼
        </span>
      </button>
    </span>
  );
};

export default EvenTypePicker;
