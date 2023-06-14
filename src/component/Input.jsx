import React, { useState } from 'react';

const BasicInput=()=> {
    const [myData, setmyData] = useState('');
    const [allEntry, setallEntry] = useState([]);
    const AddClick = () => {
        if (myData.trim() !== '') {
            setallEntry((prevData) => [...prevData, myData.trim()]);   
        }
        else
        {
            alert('Please Enter Data');
        }
        setmyData('');
    };
    return (

        <div className="App">
            <input type="text" value={myData} onChange={(e)=>setmyData(e.target.value)} autoComplete='off' placeholder="Enter some data"/>
            <button onClick={AddClick} className="btn-display">Add</button>
            
            <p id="displayPara">{allEntry.map((data, currentIndex) => (
                 <span key={currentIndex} style={{ backgroundColor: (currentIndex + 1) % 5 === 0 ? 'blue' : 'inherit' }}>{data+' '}</span>
        ))}
      </p>
    </div>
  );
}

export default BasicInput;
