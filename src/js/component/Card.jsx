import React, { useState } from "react";

const Card = ({name, email, phone, address}) => {
    return (
        <div className="card text-center"style={{width: "18rem"}}>
            
            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg" className="card-img-top javi" alt="..."/>
            
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{address}</p>
                    
                    <i onClick={() => actions.eliminarContacto(contact.id)}
                        className="fas fa-trash-alt">
                    </i>
                    <i onClick={() => actions.editarContacto(contact.id)}
                        className="fas fa-pencil-alt">
                    </i>
                   
                </div>
        </div>
    )
}
export default Card;