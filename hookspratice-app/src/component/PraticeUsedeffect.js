import { useEffect,useState } from "react";

// export default function UseDeffectPratice(){
//    const[data,setData] =  useState(0);

//    useEffect(()=>
//    {setTimeout(()=>
//     {
//         setData((data)=>data+1);
//    },1000)
// });

// return <h1>{data}</h1>

// }
// always use secound parameter of usedeffect for controle our useeffect working 
// we use array for secound parametar 

export default function UseDeffectPratice(){
    const[data,setData] =  useState(0);

    useEffect(()=>
    { let timer = setTimeout(()=>
     {
         setData((data)=>data+1);
    },1000)
    return () => clearTimeout(timer)
 },[]);
 
 return <h1>{data}</h1>
 
 }