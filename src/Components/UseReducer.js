import React, { useEffect, useReducer } from 'react'
import './style.css';


const reducer=(state,action)=>{
    if(action.type==="INCR")
    {
        state=state+1;
    }
    if(action.type==="DCR")
    {
        if(state<1)
        state=0;
        else
        state=state-1;
    }
    return state;
};
const UseReducer = () => {
  
    const data=0;
    const [state,dispatch]=React.useReducer(reducer,data);
    
    React.useEffect(()=>
    {
        document.title=`values(${state})`;
    });

    return (
        <>
          <div className="center_div">
            <p>{state}</p>
            <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCR
            </div>
            <div
              class="button2"
              onClick={()=>dispatch({type:"DCR"})}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              DECR
            </div>
          </div>
        </>
      )

}

export default UseReducer
