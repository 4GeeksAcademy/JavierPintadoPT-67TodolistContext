import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react"
import Card from "../component/Card.jsx";
import AñadirContacto from "./AñadirContacto.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const [nombre, setNombre] = useState("")

	useEffect( () => {

		actions.crearUsuario();
		actions.traerContactos();
		actions.eliminarContacto();
		actions.editarContacto();
		
	}, [])

	return(
		<div className="text-center mt-5">
			
			<h1>Lista de contactos</h1>
			{store.contactos.map((contacto) => 
				<Card 
					className="container-text-center"
					name={contacto.name} 
					phone={contacto.phone} 
					address={contacto.address} 
					email={contacto.email} 
				/>)
			} 
		</div>
	)

}
