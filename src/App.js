import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import { connect } from "react-redux";
import { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, memoryRecall, clearMemory } from "./actions/index";

function App(props) {

  const calculateNewNumber = (number) => {
    props.applyNumber(number);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="www.LambdaSchool.com"><img width="40px" src="./Lambda-Logo-Red.png" alt="Greek Lambda Symbol / Upside down triangle missing bottom border" /> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={props.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {props.operation}</span>
              <span id="memory"><b>Memory:</b> {props.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>props.addToMemory(props.total)} />
              <CalcButton value={"MR"} onClick={()=>props.memoryRecall(props.memory)} />
              <CalcButton value={"MC"} onClick={props.clearMemory} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>calculateNewNumber(1)}/>
              <CalcButton value={2} onClick={()=>calculateNewNumber(2)}/>
              <CalcButton value={3} onClick={()=>calculateNewNumber(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=>calculateNewNumber(4)}/>
              <CalcButton value={5} onClick={()=>calculateNewNumber(5)}/>
              <CalcButton value={6} onClick={()=>calculateNewNumber(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=>calculateNewNumber(7)}/>
              <CalcButton value={8} onClick={()=>calculateNewNumber(8)}/>
              <CalcButton value={9} onClick={()=>calculateNewNumber(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>props.changeOperation("+")}/>
              <CalcButton value={"*"} onClick={()=>props.changeOperation("*")}/>
              <CalcButton value={"-"} onClick={()=>props.changeOperation("-")}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={props.clearDisplay} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) =>{
  return {
    total: state.total,
    operation: state.operation,
    memory: state.memory,
  }
}

export default connect(mapStateToProps, { addOne, applyNumber, changeOperation, clearDisplay, addToMemory, memoryRecall, clearMemory })(App);
