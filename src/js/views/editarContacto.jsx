import React, { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

const EditarContacto = () => {
    const [name, setName] = useState(store.contactoSeleccionado.name)
    const [phone, setPhone] = useState(store.contactoSeleccionado.phone)
    const [email, setEmail] = useState(store.contactoSeleccionado.email)
    const [address, setAddress] = useState(store.contactoSeleccionado.address)
    const { store, actions } = useContext(Context)
    
    return (
        
        <div className="row">
            <h2 className="text-center">Editar Contacto</h2>
            
            <div className="text-center">
                <label className=" col-12 mt-2 ms">Nombre</label>
                <input className="col-8" value={name} type="text" onChange={(evento) => setName(evento.target.value)} />
               
                <label className=" col-12 mt-2">Email</label>
                <input className="col-8" value={email} type="text" onChange={(evento) => setEmail(evento.target.value)} />
               
                <label className=" col-12 mt-2" >Phone</label>
                <input className="col-8" value={phone} type="text" onChange={(evento) => setPhone(evento.target.value)} />
                
                <label className="  col-12 mt-2">Address</label>
                <input className="col-8" value={address} type="text" onChange={(evento) => setAddress(evento.target.value)} />
                
                <button className=" btn btn-primary mt-2 color-danger col-8" onClick={() => actions.editarContacto( store.id, name, phone, email, address)}>Añadir</button>
            </div>
        </div>
    )
}
export default EditarContacto;










