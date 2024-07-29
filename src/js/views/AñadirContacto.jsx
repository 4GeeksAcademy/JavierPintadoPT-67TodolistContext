import React, { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
const AñadirContacto = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const { store, actions } = useContext(Context)
    return (
        <div className="row">
            
            <input className="col-12" type="text" onChange={(evento) => setName(evento.target.value)} />
            <label>Email</label>
            <input type="text" onChange={(evento) => setEmail(evento.target.value)} />
            <label>Phone</label>
            <input type="text" onChange={(evento) => setPhone(evento.target.value)} />
            <label>Address</label>
            <input type="text" onChange={(evento) => setAddress(evento.target.value)} />
            <button onClick={() => actions.crearContacto(name, phone, email, address)}>Enviar contacto</button>
        </div>
    )
}
export default AñadirContacto










