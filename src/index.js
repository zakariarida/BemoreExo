import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
const  data  =  require ('./data');

class App extends React.Component{

	constructor(){
			super();
			this.state={question:data.question,reponse:""}; 
	}

	GetRep = e => {
		if(e.target.value=="OUI"){
			this.setState({reponse:data.reponse.oui});
		}else{
			this.setState({reponse:data.reponse.non});
		}
	};


	render(){
		return(
				<div id="exo-box">
					<h2>{this.state.question}</h2>
					<div id="exo-button">
						<input type="button" id="exo-btnnon" value="NON" onClick={ e => this.GetRep(e)}/>
						<input type="button" id="exo-btnoui" value="OUI" onClick={ e => this.GetRep(e)} />
					</div>
					<p>{this.state.reponse}</p>
				</div>
			)
	}
};


ReactDom.render(
  <App/>,
  document.getElementById('exo-test')
);