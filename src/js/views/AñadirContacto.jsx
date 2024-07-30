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
            <h2 className="text-center">Añadir Contacto</h2>
            
            <div className="text-center">
                <label className=" col-12 mt-2">Nombre</label>
                <input className="col-8 " type="text" onChange={(evento) => setName(evento.target.value)} />
               
                <label className=" col-12 mt-2">Email</label>
                <input className="col-8" type="text" onChange={(evento) => setEmail(evento.target.value)} />
               
                <label className=" col-12 mt-2" >Phone</label>
                <input className="col-8" type="text" onChange={(evento) => setPhone(evento.target.value)} />
                
                <label className="  col-12 mt-2">Address</label>
                <input className="col-8" type="text" onChange={(evento) => setAddress(evento.target.value)} />
                
                <button className=" btn btn-primary mt-2 color-danger col-8" onClick={() => actions.crearContacto(name, phone, email, address)}>Añadir</button>
            </div>
           
           
        </div>
    )
}
export default AñadirContacto










