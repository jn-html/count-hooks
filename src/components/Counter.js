import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const increaseAndLog = () => {
        setCount(count + 1)
    };
    
    const decreaseAndLog = () => {
        setCount(count - 1)
    }
    
    return (
        <div>
            <p>Le compteur est à : {count}</p>
            <button onClick={increaseAndLog}>Click to increment</button>
            <button onClick={() => setCount(count -1)}>Click to decrease</button>
        </div>
    );
};

export default Counter;

/*import React, { useState } from 'react';
const Counter = () => {
   const [count, setCount] = useState(0);
   const [inputText, setInputText] = useState('');
   const increaseAndLog = () => {
       setCount(count + 1)
   };
   const decreaseAndLog = () => {
       setCount(count - 1)
   }
   return (
       <div>
            <input type="text" placeholder="enter your number here"/>
           <p>Le compteur est  à : {count} </p>
           <button onClick={increaseAndLog}>Click to increment</button>
           <button onClick={decreaseAndLog}>Click to decrement</button>
       </div>
   );
};
export default Counter;*/
