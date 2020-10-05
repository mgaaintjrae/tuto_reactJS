// COMPOSANT CAPABLE DE DIRE SI L'EAU BOUE OU NON

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Column2({ left, right }) {
  return (
    <div className="row">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
}

// Pas d'état (state) une fonction suffit
function BoilingVerdict(props) {
  if (props.celsius >= 50) {
    return <div className="alert alert-danger">L'eau bout.</div>;
  }
  return <div className="alert alert-success">L'eau ne bout pas.</div>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = { temperature: "" };
  }

  handleChange(e) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // const {temperature} = this.state
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    const name = "scale" + this.props.scale;
    return (
      <div className="form-group">
        <legend htmlFor={name}>
          Saisissez la température en {scaleNames[scale]} :
        </legend>
        <input
          type="text"
          id={name}
          value={temperature}
          onChange={this.handleChange}
          className="form-control"
        />
      </div>
    );
  }
}

// Besoin d'un état (state) faire un class dans ce cas
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const { temperature } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <Column2
          left={
            <TemperatureInput
              scale="c"
              temperature={celsius}
              onTemperatureChange={this.handleCelsiusChange}
            />
          }
          right={
            <TemperatureInput
              scale="f"
              temperature={fahrenheit}
              onTemperatureChange={this.handleFahrenheitChange}
            />
          }
        />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.querySelector("#app"));
