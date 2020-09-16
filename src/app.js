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

//Incrémenter un chiffre toutes les secondes
class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: props.start , stop: false };
    // this.timer = null;
  }

  componentDidMount() {
    this.timer = window.setInterval(() => this.increment(), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

//   increment() {
//     this.setState((state, props) => ({ n: state.n + props.step }));
//   }

  toggle(){
    this.setState((state, props) =>
    setIsActive(!isActive))
}

  render() {
    return (
      <div>
        <h2>Compteur : {this.state.n}</h2>
        <button onClick={this.toggle}>{isActive ? 'Pause' : 'Start'}</button>
      </div>
    );
  }
}

Incrementer.defaultProps = {
  start: 0,
  step: 1,
};

// Gestion des événements
class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState((state, props) => 
      ({ counter: state.counter + 1 }))    
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
