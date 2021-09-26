// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount,
        };
      }

	render() {
        let seconds = this.state.secondsLeft
		return seconds == 0
        ? <div>Boom!</div>
        : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
	}
}