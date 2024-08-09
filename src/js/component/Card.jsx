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
        <div className=" border  w-75 carta mt-5"style={{width: "28rem"}}>
                                    

            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg" className=" ms-5 card-img-top imagen" alt="..."/>
            
                <div className="card-body">
                    <div className="row">
                        <h5 className="col-6 nombre">{name}</h5>
                        <p className="col-4"></p>
                        
                        <i onClick={() => handleEditar(name, email, phone, address, id) }
                            className=" fas fa-pencil-alt col-1">
                        </i>
                            
                         <i onClick={() => actions.eliminarContacto(id) }
                            className="  fas fa-trash-alt col-1 ">
                        </i>
                    </div>
                    <div className="row">
                        <p className="col-6 datos">
                            <i className="fas fa-envelope me-2"></i>{email}
                        </p>
                        
                        <p className=" col-6"></p>
                        
                        <p className="col-6  datos">
                            <i className="fas fa-phone me-2 "></i>{phone}
                        </p>
                        
                        <p className=" col-6"></p>
                        
                        <p className=" col-6  datos"> 
                            <i className="fas fa-home me-2 "></i>{address}
                        </p>
                        
                        <p className=" col-6"></p>
                    </div>
                    
                </div>
        </div>
    )
}
export default Card;