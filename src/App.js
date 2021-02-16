import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from "../src/reducers/index";
import { addOne, applyNumber, changeOperation, clearDisplay, memorizeTotal } from "../src/actions/index";

function App() {

  const [state, dispatch]=useReducer(reducer, initialState);

  const additionHandler=(event)=>{
    dispatch(addOne(event.target.value));
  }

  const applyHandler=(input)=>{
    dispatch(applyNumber(input));
  }

  const changeHandler=(op)=>{
    dispatch(changeOperation(op))
  }

  const clearHandler=()=>{
    dispatch(clearDisplay())
  }
  const memorizeTotaler=()=>{
    dispatch(memorizeTotal())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory} </span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={()=>memorizeTotaler()} />
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> applyHandler(1)} /> 
              <CalcButton value={2} onClick={()=> applyHandler(2)} />
              <CalcButton value={3} onClick={()=> applyHandler(3)}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> applyHandler(4)}/>
              <CalcButton value={5} onClick={()=> applyHandler(5)}/>
              <CalcButton value={6} onClick={()=> applyHandler(6)}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> applyHandler(7)}/>
              <CalcButton value={8} onClick={()=> applyHandler(8)}/>
              <CalcButton value={9} onClick={()=> applyHandler(9)}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>changeHandler("+")} />
              <CalcButton value={"*"} onClick={()=>changeHandler("*")} />
              <CalcButton value={"-"} onClick={()=>changeHandler("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=>clearHandler()} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
