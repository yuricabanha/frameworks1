import { useEffect, useState } from "react";

export default function UseEffect() {
    const [numero, setNumero] = useState(0);
    setTimeout(() =>{
        setNumero(numero + 1)
    }, 5000)
    useEffect(()=>{
        if (numero > 0) {
            document.title = `UseEffect - ${numero}`
        }
    }, [numero])
    return <>
        <div className='text-center'>
            <h2>UseEffect()</h2>
            <h3>{numero===0? "Bem Vindos" : numero}</h3>
        </div>
    </>
}