import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import LoadingSpinner from "./LoadingSpinner"
import ErrorDisplay from "./ErrorDisplay";

// function component
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position.coords.latitude),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

//class component
class App extends React.Component {
  //constructor can do data loading, start getting it as soon as the constructor begins, but best practise is to do in component did mount. So now constructor can just be for state
  // constructor(props) {
  //   //super is required in class based for the react.component's own constructor
  //   super(props);

  //   this.state = {
  //     lat: null,
  //     errorMessage: null,
  //     loading:
  //       "Loading, please wait! Don't be so impatient, we need to callback first.",
  //   };
  // }

  //can replace entire constuctor/super and just declare state like below. Babel will replace and implement the constructor.
  state = {
    lat: null,
    errorMessage: null,
    loading:
      "Loading, please wait!",
  };

  //loads when the component is created and rendered
  //great place to do some data loading, outside process - if it's only done one time, only gets invoked one time. Can use constructor or didmount for data loading, but best practices and convention is to do in did mount -makes it easier for other devs to see as well.
  componentDidMount() {
    console.log("component did render and mount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //loads when the component updated, or was re-rendered, ie. setState was used
  //anytime the update is called, it will call render right before it.
  //good place to do data loading, things that need to be done everytime there is an update (network requests, everytime there is info entered in an input, etc)
  componentDidUpdate() {
    console.log("it updated and re-rendered!");
  }

  //anytime we need to do some cleanup when a component is no longer needed/rendered. Not used quite as often these days.
  // componentWillUnmount() {
  // }

  //rather than put the conditional returns inside the render method, its better to have them in a helperfunction like this, in case we need to make changes to the overall body (like adding a border no matter which component is showing). Anytime we make a component, we try to not have multiple return statements inside a render method, we often want to wrap any component that is shown with a common element (div = container)

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <ErrorDisplay errorMessage={this.state.errorMessage} />;
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    } else {
      return <LoadingSpinner message="Please accept location request" />;
    }
  }

  //react says we have to use the render method or it will be angry
  //dont do coding in the render, no js or api calls, just want to return jsx
  render() {
    return (
      <div className="container">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
