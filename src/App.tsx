import React, { ChangeEvent, Component } from 'react';
import './App.css';

interface State{
  kg: number;
  cm: number;
  bmi: number;
}

class App extends Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      kg: 0,
      cm: 0,
      bmi: 0
    }
  }

render(){
   return <div>
    <div className='doboz'>
    <table>
      <tr>
        <td>Írja be cm-ben a tstmagasságát (cipő nélkül mérve) </td>
        <td className='jobb'>
          <input onChange={this.Cm} id='cm' type="number" /> cm
        </td>
      </tr>
      <tr>
        <td>Írja be kg-ban számított testsúlyát (cipő nélkül mérve)</td>
        <td className='jobb'>
        <input onChange={this.Kg} id='kg' type="number" /> kg
        </td>
      </tr>
      <tr>
        <td colSpan={2}>
          <button onClick={this.Katt}>Számítás</button>
        </td>
      </tr>
    </table>
  </div>
  <h2 id='szin'>AZ ÖN BMI ÉRTÉKE: { this.state.bmi }</h2>

  <table id="kozeptabla">
            <tr id="elso" className={"vonal " + ((this.state.bmi<18.5)?"selection":"")}>
                <td className="center"><b>18,5 vagy kevesebb</b></td>
                <td>SOVÁNY</td>
            </tr>
            <tr id="masodik" className={"vonal " + ((this.state.bmi>18.5 && this.state.bmi<24.9)?"selection":"")}>
                <td className="center"><b>18,8-24,9</b> </td>
                <td>NORMÁL</td>
        
            </tr>
            <tr id="harmadik" className={"vonal " + ((this.state.bmi>=25 && this.state.bmi<29.9)?"selection":"")}>
                <td className="center"> <b>25-29,9</b> </td>
                <td>TÚLSÚLY</td>
            </tr>
            <tr id="negyedik" className={"vonal " + ((this.state.bmi>=30 && this.state.bmi<34.9)?"selection":"")}>
                <td className="center"> <b>30-34,9</b> </td>
                <td>I.FOKÚ ELHÍZÁS</td>
            </tr>
            <tr id="otodik" className={"vonal " + ((this.state.bmi>=35 && this.state.bmi<39.9)?"selection":"")}>
                <td className="center"> <b>35-39,9</b> </td>
                <td>II.FOKÚ ELHÍZÁS</td>
            </tr>
            <tr id="hatodik" className={"vonal " + ((this.state.bmi>40)?"selection":"")}>
                <td className="center"> <b>40 vagy több</b> </td>
                <td>III.FOKÚ ELHÍZÁS</td>
            </tr>
        </table>

        <h2 id='szin'> <b>AZ IDEÁLIS TESTTÖMEGE: <span id="index2">0</span> </b> </h2>

        <table id="kozeptabla">
            <tr>
                <td width="150px" id="szin"><span id="szelso">0</span></td>
                <td id="font">Kívánatos szélső értékek</td>
            </tr>
        </table>
  </div>
  }

  Katt = () => {
    const szamol =Math.round(this.state.kg  / (this.state.cm / 100)**2); 
    this.setState({
      bmi : szamol
    })
  }

  Kg = (e: ChangeEvent) => {
    let ujKg = parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      kg: ujKg
    });
  }

  Cm = (e: ChangeEvent) => {
    let ujCm = parseInt((e.currentTarget as HTMLInputElement).value);
    this.setState({
      cm: ujCm
    });
  }
  
}
export default App;
