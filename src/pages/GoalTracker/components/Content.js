import React from "react";
import GoalList from "./GoalList";
import Calendar from "./Calendar";
import { StyledEngineProvider } from "@mui/material/styles";
import "./styles/Content.css";
import FlipClock from "./FlipClock";
import Spotify from "./Spotify";
import Quote from "./Quote";

function Content() {
  return (
    <div className="main-content">
      {/* Top Container is for the all the interactice content, such as goals, spotify player, calendar etc. */}
      <div className="top-container">
        <div className="left-container">
          <FlipClock />
          <Spotify />
        </div>
        <div className="to-do-list">
          <GoalList />
        </div>
        <div className="right-container">
          <StyledEngineProvider injectFirst>
            <Calendar />
          </StyledEngineProvider>
          <Quote />
        </div>
      </div>
    </div>
  );
}

export default Content;
