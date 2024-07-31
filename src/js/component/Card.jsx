import React, { useState } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react"
import { useNavigate } from "react-router";

const Card = ({name, email, phone, address, id}) => {
    
    const { store, actions } = useContext(Context)
    const navigate = useNavigate();
    const handleEditar =(id) => {
       actions.seleccionarContacto(id);
        navigate("/EditarContacto");
    }
    return (
        <div className=" card mt-5"style={{width: "28rem"}}>
            
            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg" className="card-img-top javi" alt="..."/>
            
                <div className=" text-center card-body">
                    <h5 className="card-title">{name}</h5>
                    
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{address}</p>
                    
                    <i onClick={() => actions.eliminarContacto(id)}
                        className="fas fa-trash-alt">
                    </i>
                    <i onClick={() => handleEditar(id) }
                    
                        className="fas fa-pencil-alt">
                    </i>
                   
                </div>
        </div>
    )
}
export default Card;