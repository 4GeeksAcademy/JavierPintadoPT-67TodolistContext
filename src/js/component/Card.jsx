import React, { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react"
import { useNavigate } from "react-router";
import "../../styles/Card.css";
 


const Card = ({name, email, phone, address, id}) => {
    
    
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const handleEditar =(name, email, phone, address, id) => {
       actions.seleccionarContacto(name, email, phone, address, id);
        navigate("/EditarContacto");
        
    }

    console.log(store.contactoSeleccionado)
    return (
        <div className=" carta mt-5"style={{width: "28rem"}}>
            
            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg" className="card-img-top imagen" alt="..."/>
            
                <div className="card-body">
                    <div container>
                        <div className="row">
                            <h5 className="  ms-5 col-2 nombre card-title">{name}</h5>
                        
                            <i onClick={() => handleEditar(name, email, phone, address, id) }
                            className=" col-2 lapiz fas fa-pencil-alt">
                            </i>
                            
                            <i onClick={() => actions.eliminarContacto(id) }
                            className=" col-2 basura fas fa-trash-alt">
                            </i>
                        </div>
                    </div>
                   
                    
                    <p className=" datos card-text">{email}</p>
                    <p className="datos card-text">{phone}</p>
                    <p className=" datos card-text">{address}</p>
                    
                   
                   
                </div>
        </div>
    )
}
export default Card;