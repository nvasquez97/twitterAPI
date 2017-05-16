import React, { Component } from 'react';
import "../../client/main.css"

export default class Overlay extends Component {

	constructor(props){
		super(props);
		this.state ={
			tweets:[],
			canvas: null
		}
	}

	/*componentWillMount(nextProps){
		this.setState({
			tweets:nextProps.getTweets
		})
	}*/

	draw(){
		var laP = this.props.getProj();
		var can = this.state.canvas;
		var ctx = can.getContext('2d');
        	ctx.beginPath();
        console.log(this.props.getTweets);
        this.props.getTweets.map((tweet)=>{
            let point = laP(tweet.coordinates.coordinates);
            ctx.moveTo(point[0], point[1]);
            if(point[0]>229 ||point[1]>229)
           	ctx.fillStyle = 'blue';
           	else
           	ctx.fillStayle = 'black';

            ctx.arc(point[0], point[1], 3, 0, Math.PI * 2, true);
        });
        ctx.fill();
	}

	render(){
		return(
			<div className="over">  
			<canvas height="600" width="600" ref={(can)=>{this.state.canvas=can}} onMouseOver={this.draw.bind(this)}>
			</canvas>				
			</div>
			)



	}


}
