import React, { Component } from 'react';
import "../../client/main.css"

export default class Overlay extends Component {

	constructor(props){
		super(props);
		this.state ={
			tweets:[],
			canvas: null,			
		}
		this.colores=['green','blue','yellow','black', 'red', 'orange', 'grey'];
	}

	randomBetween(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min)) + min;
  	}

	draw(){
		
		var laP = this.props.getProj();
		var can = this.state.canvas;
		var ctx = can.getContext('2d');

        	ctx.beginPath();
        this.props.getTweets.map((tweet)=>{
        	let con = this.randomBetween(0,7);
            let point = laP(tweet.coordinates.coordinates);
            ctx.moveTo(point[0], point[1]);
           	ctx.fillStyle = this.colores[con];

            ctx.arc(point[0], point[1], 3, 0, Math.PI * 2, true);
            ctx.fill();
        });
        
	}

	render(){
		return(
			<div className="over">  
			<canvas height="600" width="600" ref={(can)=>{this.state.canvas=can}} onMouseOver={this.draw.bind(this)} onMouseOut={this.draw.bind(this)}>
			</canvas>				
			</div>
			)
	}


}
