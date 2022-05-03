//import math from "math";
import {evaluate} from "mathjs";
import React from "react";
import './Functionality.style.css'

class Functionality extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
      //inputRef:""
    };
  }
// for updating input 
  updateInput= (event)=>{
    this.setState({display:event.target.value})
    console.log(this.state)
  }

  //for displaying numbers
  displayAdd= (event) =>{
      this.setState({display:`${this.state.display}${event.target.value}`})
      console.log(event.target.value)
  }

  //for backspace
  backspace = () => {
      this.setState({display:this.state.display.slice(0,-1)});
  }

  clearFunction = () =>{
      this.setState({display:""})
  }

  // inputRef= (event) =>{
  //   this.setState({display:this.calculation})
  // }

  // calculation = (event) =>{
  //     switch(event){
  //       case '+':
  //         return (a,b) => a+b;
  //       case '-':
  //         return (a,b) => a-b;
  //       case '*':
  //         return (a,b) => a*b;
  //       case '/':
  //         return (a,b) => a/b;
  //       default:
  //         throw new console.error('Wrong input');
  //     }
  // }

  calculate= () =>{
    // this.setState(prevState => ({
    //   display: `${prevState.value}${event.target.value}`.replace(/([\/+\-/*=])([\/+\-*=])/g, '$2')
    // }));
    try{
      this.setState({display: evaluate(this.state.display).toString()}) 
    }
    catch(error){this.setState({display: "Wrong input"})} 
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="calculator-div">
            <table >
            <tbody>
              <tr>
                <td colSpan = "3"><input className="display-box" type="text" value={this.state.display} onChange={this.updateInput}/></td>
                <td><input className="button" type="button" value="clear" onClick={this.clearFunction} /></td>
              </tr>

              <tr>
                  <td><input className="button" type="button" value="1" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="2" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="3" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="/" onClick={this.displayAdd} /></td>
              </tr>

              <tr>
                  <td><input className="button" type="button" value="4" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="5" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="6" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="-" onClick={this.displayAdd} /></td>
              </tr>

              <tr>
                  <td><input className="button" type="button" value="7" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="8" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="9" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="+" onClick={this.displayAdd} /></td>
              </tr>

              <tr>
                  <td><input className="button" type="button" value="." onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="del" onClick={this.backspace} /></td>
                  <td><input className="button" type="button" value="=" onClick={this.calculate} /></td>
                  <td><input className="button" type="button" value="*" onClick={this.displayAdd} /></td>
              </tr>

            </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Functionality;
