import { useState } from "react";
export default function PraticeSetStateHook() {
    const [atstring, setString] = useState('orange');
    const [name, setName] = useState('ram');
    const [booleanValue, setBooleanValue] = useState(false);
    const [numbers, setnumbers] = useState(0);
    const [names, setNames] = useState([]);
    const HandleString = () => {
        setString('mango')
    };
    const Handlenames = () => {
        setName('sam')
    };
    const HandleFormData = (e) => {
        // we not update array and object directly for that we make one copy of that array using sparead oprator [...name]
        e.preventDefault();
       setNames([...names,{id:names.length,name}])
  
        setNames('')
    }
    const HandleBoolean = () => {
        setBooleanValue(!booleanValue)
    };
    const HandleNumberIncrement = () => {
        // setnumbers(numbers+1) (0+1)   increment by one because alway start from initial valuue 
        // setnumbers(numbers+1) (0+1)
        setnumbers((numbers) => (numbers + 1))  //(0+1)      // increment by 2 because with the help of arrow function we get previous value 
        setnumbers((numbers) => (numbers + 1))  //(1+1)
    };
    const HandleNumberDecrement = () => {
        setnumbers(numbers - 1)
    };
    return (
        <>
            <h1>string</h1>
            <button onClick={HandleString}>change</button>
            <button onClick={Handlenames}>change</button>
            
            <h1>{atstring}</h1>
            <hr></hr>
            <h1>Boolean</h1>
            <button onClick={HandleBoolean}>show</button>
            <h1 style={{ display: booleanValue ? 'block' : 'none' }}>show me</h1>
            <hr></hr>
            <h1>Number</h1>
            <button onClick={HandleNumberIncrement}>Increment</button>
            <h1>{numbers}</h1>
            <button onClick={HandleNumberDecrement}>Decrement</button>
            <hr></hr>
            <h1>object</h1>
            <form onSubmit={HandleFormData}>
                <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)}></input>
                < button>submit</button>
            </form>
            <ul>
                {names.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
                
            </ul>
            <li>

            </li>
            <hr></hr>
        </>
    )
}