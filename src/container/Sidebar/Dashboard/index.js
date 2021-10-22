import React from "react";
import RandomAdvice from "../APICalls/RandomAdvice";
import Weather from "../APICalls/Weather";
import NasaPicture from "../APICalls/NasaPicture";
import LightThemeProvider from "../../LightThemeProvider";
import { GridChild, GridWrapper } from "./Styles";
import LightModeToggle from "../../LightMode";

const Dashboard = () => {
  return (
    <LightThemeProvider>
      <GridWrapper>
        <GridChild isFirstChild>
          <Weather />
        </GridChild>

        <GridChild
          isSecondChild
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <RandomAdvice />
        </GridChild>

        <GridChild isThirdChild style={{ textAlign: "center", border: "none" }}>
          <NasaPicture />
        </GridChild>

        <GridChild
          isFifthChild
          style={{
            textAlign: "center",
            background: "#111",
            border: "none",
            height: "304px",
            overflow: "hidden",
            perspective: "400px",
          }}
        >
          <div class="crawl">
            <div class="title">
              <h1
                style={{
                  marginBottom: "20%",
                  fontSize: "100px",
                  whiteSpace: "nowrap",
                }}
              >
                React Galaxy
              </h1>
            </div>

            <div>
              <p>Coded by</p>
              <span>Zoran</span>
            </div>
            <div>
              <p>Designed by</p>
              <span>Zoran</span>
            </div>
            <div>
              <p>Mentored by</p>
              <span>Mladja</span>
            </div>
            <div>
              <p>Noteable mentions</p>
              <span>Marko and Monika</span>
            </div>
            <div>
              <p>FreePik premium content provider</p>
              <span>Lazar</span>
            </div>
            <div>
              <p>Created at</p>
              <span>Bridgewater Labs</span>
            </div>
          </div>
        </GridChild>

        <GridChild
          isSixthChild
          style={{ background: "#191919", border: "none" }}
        >
          <h5>Lights on</h5>
          <LightModeToggle />
          <h5>Go dark</h5>
        </GridChild>
      </GridWrapper>
    </LightThemeProvider>
  );
};

export default Dashboard;
