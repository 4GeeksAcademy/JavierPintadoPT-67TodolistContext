import React from "react";

const Card = ({name, email, phone, address}) => {
    return (
        <div className="card" style="width: 18rem;">
            <img src="https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571_1280.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{phone}</p>
                    <p className="card-text">{address}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <button onClick={() => actions.eliminarContacto(contact.id)}>Eliminar</button>
                </div>
        </div>
    )
}
export default Card;