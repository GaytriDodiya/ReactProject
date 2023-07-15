import { useContext } from "react";
import{ NoteContext} from "./context/context2";
export default function About(){
    const a = useContext(NoteContext)

    return (
        <>
 <h1>{a.name} and {a.class}</h1>


        </>
    )
   
    }
