import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react"
import Card from "../component/Card.jsx";
import AñadirContacto from "./AñadirContacto.jsx";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const [nombre, setNombre] = useState("")

	useEffect( () => {

		actions.crearUsuario();
		actions.traerContactos();
		
		
	}, [])
	useEffect( () => {

		console.log(store.contactos);
		
		
	}, [store.contactos])

	return(
		<div className="text-center mt-5">
			<Navbar/>
			<link to="/AñadirContacto">
				
			</link>
			<h1>Lista de contactos</h1>
			{store.contactos.map((contacto) => 
				<Card 
					name={contacto.name} 
					phone={contacto.phone} 
					address={contacto.address} 
					email={contacto.email} 
					id={contacto.id}
				/>)
			} 
		</div>
	)

}
