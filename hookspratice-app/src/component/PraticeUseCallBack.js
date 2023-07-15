import { useCallback, useState } from "react"
import Child1 from "./context/child1"

export default function PraticeCallBack(){
    const [add,setAdd] = useState(0);
    const Learning =useCallback( ()=>{
     //something
    },[])
    return (
        <div>
            <h1>callback</h1>
            <Child1 Learning={Learning} />
            <h1>{add}</h1>
            <button onClick={()=>setAdd(add+1)}>add</button>
        </div>
    )
}