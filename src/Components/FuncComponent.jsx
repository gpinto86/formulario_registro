import { useState } from "react"
function FuncComponent () {
    const state = useState(100)
    const value = state[0]
    const updateValue = state[1]
    return ( 
        <div>
            Compomente Funcional
        <p>
            <button>-</button>  {value}  
            <button>+</button>
        </p>
    </div>
    )
}

export default FuncComponent