class Dashboard extends React.Component {
 constructor(props){
   super(props);

   this.state = {
    setUnitOne: 'kilometer',
    setUnitTwo: 'kilometer',
    setUnitValueOne: 0,
    setUnitValueTwo: 0,
    isClickOne: true,
    isClickTwo: false,
    }
    this.handleUnitOneChange = this.handleUnitOneChange.bind(this);
    this.handleUnitTwoChange = this.handleUnitTwoChange.bind(this);
    this.handleUnitValueOneChange = this.handleUnitValueOneChange.bind(this);
    this.handleUnitValueTwoChange = this.handleUnitValueTwoChange.bind(this);
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
  }

  handleUnitOneChange(e){
    this.setState({ setUnitOne: e.target.value });
  }

  handleUnitTwoChange(e){
    this.setState({ setUnitTwo: e.target.value });
  }

  handleUnitValueOneChange(e){
    this.setState({ setUnitValueOne: e.target.value });
  }

  handleUnitValueTwoChange (e){
    this.setState({ setUnitValueTwo: e.target.value });
  }

  handleClickTwo(){
    this.setState({
      setUnitValueOne: 0,
      setUnitValueTwo: 0,
      isClickOne: false,
      isClickTwo: true,
    });
  }

  handleClickOne(){
    this.setState({
      setUnitValueOne: 0,
      setUnitValueTwo: 0,
      isClickOne: true,
      isClickTwo: false,
    });
  }
  
  render() {
    const converted = convertor.getConverted(
      this.state.setUnitValueOne,
      this.state.setUnitValueTwo,
      this.state.setUnitOne,
      this.state.setUnitTwo,
    );
    if(this.state.isClickOne && !this.state.isClickTwo) {
      return(
        <div className='ui centered grid'>
          <div className='center aligned two column row'>
            <div className='column'>
                <UnitList 
                  unitValue={this.state.setUnitValueOne}
                  onChangeUnit={this.handleUnitOneChange}
                  onChangeValue={this.handleUnitValueOneChange}
                  forChange={null}
                />
            </div>
            <div className='column'>
                <UnitList 
                  unitValue={converted}
                  onChangeUnit={this.handleUnitTwoChange}
                  onChangeValue={null}
                  forChange={this.handleClickTwo}
                />
            </div>
          </div>
        </div>
      );
    }
    if(this.state.isClickTwo && !this.state.isClickOne) {
        return(
          <div className='ui centered grid container'>
            <div className='column'>
              <UnitList 
                unitValue={converted}
                onChangeUnit={this.handleUnitOneChange}
                onChangeValue={null}
                forChange={this.handleClickOne}
              />
            </div>
            <div className='column'>
              <UnitList 
                unitValue={this.state.setUnitValueTwo}
                onChangeUnit={this.handleUnitTwoChange}
                onChangeValue={this.handleUnitValueTwoChange}
                forChange={null}
              />
            </div>
          </div>
        );
    } 
  }
}

class UnitList extends React.Component {
  
  render(){
    return (
        <div className='ui centered card'>
          <div className='content'>
          <div className='ui form'>
          <div className='field'>
          <div className='ui top attached'>
            <input 
              type='text'
              value={this.props.unitValue}
              onChange={this.props.onChangeValue}
              onClick={this.props.forChange}  
            />
          </div>
          </div>
          <div className='field'>
          <div className='ui bottom attached'>
            <select onChange={this.props.onChangeUnit} id="units">
              <option value="kilometer">Kilometer</option>
              <option value="hectometer">Hectometer</option>
              <option value="decameter">Decameter</option>
              <option value="meter">Meter</option>
              <option value="decimeter">Decimeter</option>
              <option value="centimeter">Centimeter</option>
              <option value="milimeter">Milimeter</option>
            </select>
          </div>
          </div>
          </div>
        </div>
        </div>
    );
  }
} 

ReactDOM.render(
  <Dashboard />,
  document.getElementById('content')
)