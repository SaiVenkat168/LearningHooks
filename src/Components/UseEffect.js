import React, { useEffect } from 'react'
import './style.css'
const UseEffect = () => {
  
    const data=0;
    const [cur,update]=React.useState(data);
    
    React.useEffect(()=>
    {
        document.title=`values(${cur})`;
    });

    return (
        <>
          <div className="center_div">
            <p>{cur}</p>
            <div class="button2" onClick={() => update(cur + 1)}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              INCR
            </div>
            <div
              class="button2"
              onClick={() => (cur > 0 ? update(cur - 1) : update(0))}>
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

export default UseEffect
