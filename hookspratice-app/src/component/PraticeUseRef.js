import { useState,useEffect,useRef } from "react";
export default function Cowndown(){
    const [coundown,setCoundown] = useState(10);
    const intervalRef = useRef(null);
    
    useEffect(()=> {
        intervalRef.current = setInterval(()=>
        {
            setCoundown((prevCounter)=>prevCounter-1);
        },1000);
    
        return () =>{
            clearInterval(intervalRef.current)
        };
    },[]);

    return(
        <>
        <p>{coundown}</p>
        </>
    )
}


