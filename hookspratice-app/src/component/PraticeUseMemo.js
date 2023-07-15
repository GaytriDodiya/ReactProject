import { useMemo, useState } from "react"

export default function MemoFunction() {
    const [add, setAdd] = useState(0)
    const [sub, setSub] = useState(100);

    const notrepeat = useMemo(
    function mul() {

        console.log("********")
        return add * 10;
    }, [add]
    )
    return (
        <div>
            <hr />
            <button onClick={() => setAdd(add + 1)}>add</button>
            <h1>{notrepeat}</h1>
            <h1>{add}</h1>
            <button onClick={() => setSub(sub - 1)}>sub</button>
            <h1>{sub}</h1>
        </div>
    )
}