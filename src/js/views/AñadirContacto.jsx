import React, { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const AñadirContacto = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const { store, actions } = useContext(Context)

    const navigate = useNavigate();

    const handleCrearContacto = () => {
        actions.crearContacto(name, phone, email, address)
        setName("")
        setPhone("")
        setAddress("")
        setEmail("")
        actions.traerContactos()
        navigate("/")
    }
    return (
        
        <div className="row">
            <h2 className="text-center">Añadir Contacto</h2>
            
            <div className="text-center">
                <label className=" col-12 mt-2 ms">Nombre</label>
                <input className="col-8 " type="text" value={name} onChange={(evento) => setName(evento.target.value)} />
               
                <label className=" col-12 mt-2">Email</label>
                <input className="col-8" type="text" value={email} onChange={(evento) => setEmail(evento.target.value)} />
               
                <label className=" col-12 mt-2" >Phone</label>
                <input className="col-8" type="text" value={phone} onChange={(evento) => setPhone(evento.target.value)} />
                
                <label className="  col-12 mt-2">Address</label>
                <input className="col-8" type="text" value={address} onChange={(evento) => setAddress(evento.target.value)} />
                
                <button className=" btn btn-primary mt-2  col-8" onClick={() => handleCrearContacto() }>Añadir</button>
               
                
            </div>
           
           
        </div>
    )
}
export default AñadirContacto










