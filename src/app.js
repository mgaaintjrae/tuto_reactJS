// COMPOSANT CAPABLE DE DIRE SI L'EAU BOUE OU NON

// Pas d'état (state) une fonction suffit
function BoilingVerdict(props) {
    if (props.celsius >=50) {
        return <div className="alert alert-danger">L'eau bout.</div>
    }
    return <div className="alert alert-success">L'eau ne bout pas.</div>
}

// Besoin d'un état (state) faire un class dans ce cas
class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ''}
    }

    handleChange(e){
        this.setState({temperature: e.target.value})
    }

    render() {
        const temperature = this.state.temperature
        return( <div>
            <div className="form-group">
                <legend>Saisissez la température en Celsius :</legend>
                <input type="text" id="celsius" value={temperature} onChange={this.handleChange} className="form-control" />
               
            </div>
             <BoilingVerdict celsius={parseFloat(temperature)} />
             </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.querySelector("#app"));