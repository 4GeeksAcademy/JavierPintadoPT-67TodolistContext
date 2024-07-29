import React, { useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react"
import Card from "../component/Card";
import AñadirContacto from "./AñadirContacto";

export const Home = () => {
	const { store, actions } = useContext(Context)

	const [nombre, setNombre] = useState("")

	useEffect( () => {

		actions.crearUsuario();
		actions.traerContactos();
	}, [])

	return(
		<div className="text-center mt-5">
			<h1>Contact List</h1>
			{store.contactos.map((contacto) => 
				<Card 
					name={contacto.name} 
					phone={contacto.phone} 
					address={contacto.address} 
					email={contacto.email} 
				/>)
			}
		</div>
	)

}
