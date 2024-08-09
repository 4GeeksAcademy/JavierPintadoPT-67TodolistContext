const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // Variables
            contactos: [],
            contactoSeleccionado:{},
        },
        actions: {
            // Funciones
            crearUsuario: () => {
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                })
                .then(resp => resp.json())
                .then(data => data)
                .catch(error => console.log(error))
            },
            traerContactos: () => {
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}`)
                .then(resp => resp.json())
                .then(data => setStore({ contactos: data.contacts }))
                .catch(error => console.log(error))
            },
            crearContacto: (name, phone, email, address) => {
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}/contacts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    })
                })
                .then(resp => resp.json())
                .then(data => data)
                .catch(error => console.log(error))
            },
            eliminarContacto:(id) => {
                const nombreUsuario = 'Javier-Pintado';
                const actions = getActions()
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}/contacts/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                
                .then(resp => {
                  if (resp.ok) {
                    actions.traerContactos();
                  }  
                })
                .catch(error => console.log(error)); // Manejo de errores
            },
            editarContacto: (contactId, name, phone, email, address) => { // Añadir la función editarContacto
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}/contacts/${contactId}`, { // Realiza una solicitud PUT a la API para editar el contacto específico
                    method: 'PUT', // Método PUT
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    })
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    getActions().traerContactos();
                })
                .catch(error => console.log(error)); // Manejo de errores
            },
            seleccionarContacto: (name, email, phone, address, id) => {
                setStore({contactoSeleccionado:{name:name, email:email, phone:phone, address:address, id:id}})
            }

        }
    };
};
export default getState;
