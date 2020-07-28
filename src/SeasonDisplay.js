import "./seasonDisplay.css"
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun"
  },
  winter: {
    text: "Burrr it's chilly!",
    iconName: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  //rather than create two ternarys that are very similar, create a config object at the top 
  // const text = season === "summer" ? "Let's hit the beach!" : "Burr, it's chilly!";
  // const icon = season === "summer" ? "sun" : "snowflake";
  const { text, iconName } = seasonConfig[season];

  return (
    //good idea to have root element have same classname as the component to easily identify
    <div className={`season-display ${season}`} >
      <i className={`icon-left ${iconName} massive icon`} />
      <h1 className="season-text">{text}</h1>
      <i className={`icon-right ${iconName} massive icon`} />
    </div>
  );
};

export default SeasonDisplay;
