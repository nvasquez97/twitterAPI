import React, {Component} from "react";
import {PropTypes} from "prop-types";
import { Meteor } from "meteor/meteor";
import { createContainer} from "meteor/react-meteor-data"
import ColombiaMap from "./ColombiaMap.jsx"
import TweetsResults from "./TweetsResults.jsx";
import {Tweets} from "../api/Tweets.js";
import Overlay from "./Overlay.jsx"
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projection:null
    }

  }

  changeQuery(evt) {
    if (evt.key !== "Enter") {
      return;
    }
    // "this" will change in the method call, so I need to save it
    let component = this;

    console.log(evt.target.value);
    Meteor.call("twitter.stream", evt.target.value);

  }

  getTweets(){
    if(this.props.tweets)
    return this.props.tweets;

    return [];
  }

  setProjection(projection)
  {
    this.setState({
      projection: projection
    })
  }

  getProjection(){
    return this.state.projection;
  }

  render() {
    console.log("render!");
    return (
      <div>
      <Overlay getProj={this.getProjection.bind(this)}/>
      <ColombiaMap width="600" height="600"  data={{RISARALDA:10}} setProj={this.setProjection.bind(this)}/>
        <input type="text" onKeyPress={this.changeQuery.bind(this)} placeholder="Query"/>
        { this.props && this.props.err ?
          <div>Error: {this.props.err}</div> :
          <span></span>
        }
        <h2>Results:</h2>
        {this.props && this.props.tweets ?
          <TweetsResults tweets={this.props.tweets}/> :
          <p>Enter a query</p>
        }

      </div>
    );
  }
}

App.propTypes = {
  tweets : PropTypes.array.isRequired
};

export default AppContainer = createContainer(() => {
  Meteor.subscribe("tweets");


  return {
    tweets: Tweets.find({}).fetch()
  };
}, App);