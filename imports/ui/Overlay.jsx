import React, { Component } from 'react';


export default class Overlay extends Component {

	constructor(props){
		super(props);
		this.state ={
			tweets:[]
		}
	}

	componentWillMount(nextProps){
		this.setState({
			tweets:nextProps.getTweets
		})
	}

	render(){
		return(
			<div> 
				Hey
			</div>
			)



	}


}
