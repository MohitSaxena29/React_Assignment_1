import React from 'react';
const Data=(props)=>{
    if(props.visible)
    {
        return(
            <>
                <p>Hi I am Mohit Saxena and here is some information about React . <span>React is a JavaScript library for building user interfaces . React is used to build (SPA) single page applications.React allows us to create UI components.</span></p>
                <button onClick={()=>{props.setvisible(); props.countUpdate()}} className="btn">Display Details</button>
            </>
        )
    }
    else
    {
        return(
            <>
                <button onClick={()=>{props.setvisible(); props.countUpdate()}} className="btn">Display Details</button>
            </>
        )
    }
}

export default Data;