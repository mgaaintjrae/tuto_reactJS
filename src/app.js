// INITIATION AU JSX

// let n = 0;

// function numberFormat(n) {
//   return n.toString().padStart(2, "0");
// }

// function render() {

//   const item = ["Tache 1", "Tache 2", "Tache 3"];
//   const lis = item.map((item, k) => <li key={k}>{item}</li>);
//   const title = (
//     <React.Fragment>
//       <h1 id={"title" + n} className="title">
//         Bonjour les gens <span>{numberFormat(n)}</span>
//       </h1>
//       <ul>{lis}</ul>
//     </React.Fragment>
//   );
//   ReactDOM.render(title, document.querySelector("#app"));
// }

// render();

// window.setInterval(() => {
//   n++;
//   render();
// }, 1000);

// MON PREMIER COMPOSANT

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>Bonjour, {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const date = new Date();
    return <div>Il est {this.state.date.toLocaleTimeString()}.</div>;
  }
}

//Incrémenter un chiffre toutes les secondes avec button play/stop
const Timer = function(props) {
	return (
		<h2>
			Compteur : {props.time}
		</h2>
	);
};
const Reset = function(props) {
	return (
		<button onClick={props.onClickReset} className="reset">
			Reset
		</button>
	);
};

class Control extends React.Component {
	constructor(props) {
		super(props);
	};
  
  onClickHandler = () => {
    if(this.props.paused){
      this.props.start();
    }
    else{
      this.props.stop();
    }
  }
  
	render() {
		return (
				<button className={this.props.paused?"paused":""} onClick={this.onClickHandler}>
		    	{this.props.paused?"Start":"Pause"}
		    </button>
		);
	};
};

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0, paused: true };
  }

  tick = () => {
    this.setState({ timer: this.state.timer + 1 });
  };

  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
    this.setState({ paused: false });
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ paused: true });
  };

  reset = () => {
    this.setState({ timer: 0, paused: true });
    clearInterval(this.interval);
  };

  

  render() {
    return (
      <div>
        <Timer time={this.state.timer}/>
        <Control 
          paused={this.state.paused} 
          start={this.startTimer} 
          stop={this.stopTimer} 
        />
        <Reset  onClickReset={this.reset}/>
      </div>
    );
  }
}

// Incrementer.defaultProps = {
//   start: 0,
//   step: 1,
// };

// Gestion des événements
class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState((state, props) => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <h3>Clics : {this.state.counter}</h3>
        <button onClick={this.handleClick.bind(this)}>Cliquez ici</button>
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Clock />
      <Incrementer />
      {/* <Incrementer start={10} />
      <Incrementer start={100} step={10} />
      <ManualIncrementer /> */}
    </div>
  );
}

ReactDOM.render(<Home />, document.querySelector("#app"));

// Just shows the time, taking app state time as input prop
// const Timer = function(props) {
// 	return (
// 		<h1>
// 			{props.time}
// 		</h1>
// 	);
// };

// // Resets the timer on click and clear the setInterval
// const Reset = function(props) {
// 	return (
// 		<button onClick={props.onClickReset} className="reset">
// 			Reset
// 		</button>
// 	);
// };

// // Pause/ play button
// class Control extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	};

//   onClickHandler = () => {
//     if(this.props.paused){
//       this.props.start();
//     }
//     else{
//       this.props.stop();
//     }
//   }

// 	render() {
// 		return (
// 				<button className={this.props.paused?"paused":""} onClick={this.onClickHandler}>
// 		    	{this.props.paused?"play":"pause"}
// 		    </button>
// 		);
// 	};
// };

// class Incrementer extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { timer: 0, paused: true };
// 	};

//   tick = () => {
//   	this.setState({ timer : this.state.timer + 1 });
//   }

// 	startTimer = () =>{
// 		this.interval = setInterval(this.tick,1000);
//     this.setState({ paused : false });
// 	}

//   stopTimer = () => {
//   	clearInterval( this.interval );
//     this.setState({ paused : true });
// 	}

//   reset = () => {
//   	this.setState({ timer : 0, paused: true });
//     clearInterval( this.interval );
//   }

// 	render() {
// 		return (
// 			<div>
// 				<Timer time={this.state.timer}  />
//         <Control
//           paused={this.state.paused}
//           start={this.startTimer}
//           stop={this.stopTimer}
//         />
//         <Reset  onClickReset={this.reset}/>
// 			</div>
// 		);
// 	};
// };

// function Home() {
//   return (
//     <div>
//       {/* <Welcome name="Dorothée" />
//       <Welcome name="Jean" />
//       <Clock /> */}
//       <Incrementer />
//       {/* <Incrementer start={10} />
//       <Incrementer start={100} step={10} />
//       <ManualIncrementer /> */}
//     </div>
//   );
// }

// ReactDOM.render(<Home />, document.querySelector("#app"));
