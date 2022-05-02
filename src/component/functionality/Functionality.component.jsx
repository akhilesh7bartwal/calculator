import React from "react";
import './Functionality.style.css'

class Functionality extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "",
    };
  }

  updateInput= (event)=>{
    this.setState({display:event.target.value})
    console.log(this.state)
  }

  displayAdd= (event) =>{
      this.setState({display:`${this.state.display}${event.target.value}`})
      console.log(event.target.value)
  }

  clearFunction = (event) =>{
      this.setState({display:""})
  }

  result = (event) =>{
      switch(event){
        case '/':
          return 
      }
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
                  <td><input className="button" type="button" value="%" onClick={this.displayAdd} /></td>
                  <td><input className="button" type="button" value="=" onClick={this.displayAdd} /></td>
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
