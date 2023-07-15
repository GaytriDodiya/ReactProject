import {createContext} from "react";
import About from '../About';
const NoteContext = createContext();
const NoteProvider = ()=>{
    const state= {
        "name":"sima",
        "class":"6B"
    };
    return(
        <>
        <NoteContext.Provider value={state}>
         <About/>
        </NoteContext.Provider>
        </>
        
    )
}

export default NoteProvider;
export {NoteContext};