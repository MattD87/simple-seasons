import React from "react"

//if forgot props and dont have default, could also just do a or statement. {props.message} || "loading..."
//good idea to use default props anytime you're making a reusable component however, so it has some defualt to fall on in case dev forgets, or doesnt want to customize it

const LoadingSpinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.message}</div>
    </div>
  )
}

LoadingSpinner.defaultProps = {
  message: "Loading..."
}

export default LoadingSpinner;