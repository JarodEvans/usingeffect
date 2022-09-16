import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Namer = () => {
    const [name, setName] = useState("default name");
    const [count, setCount] = useState(1);
    const names = ["Excalibur", "Renauld", "Gerard", "Lancelot", "Arthur"];

    function changeName(counter){
        if(counter>=names.length-1){
            setCount(0);
        }else{
            setCount(counter+1);
        }
        return(
            setName(names[counter])
        );
    }

    

    return ( 
        <div className='mt-5 justify-center text-center content-center'>
            <div className='mt-5 justify-center text-center content-center'>
                <h1 className='py-3 px-3 text-slate-800 font-mono font-bold text-3xl'>The namer: "{name}"</h1>
                <div>
                <p className='py-3 px-3 mt-5 mb-4 justify-center text-center content-center font-semibold font-sans text-4xl'>Click the button to change the name using useEffect.</p>
                <button className='bg-red-500 rounded-lg py-2 px-3 text-white font-semibold text-6xl' onClick={() => changeName(count)}>Click</button>
                </div>
            </div> 
        </div>
     );
}
 
export default Namer;