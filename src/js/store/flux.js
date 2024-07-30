const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            // Variables
            contactos: []
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
            eliminarContacto: (contactId) => {
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/${contactId}`, { // Realiza una solicitud DELETE a la API para eliminar el contacto específico
                    method: 'DELETE', // Método DELETE
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(resp => {
                    if (resp.ok) { // Si la eliminación es exitosa
                        // Eliminar el contacto del store local después de la eliminación exitosa
                        const store = getStore();
                        const nuevosContactos = store.contactos.filter(contacto => contacto.id !== contactId); // Filtra el contacto eliminado
                        setStore({ contactos: nuevosContactos }); // Actualiza el store local con los contactos restantes
                    }
                })
                .catch(error => console.log(error)); // Manejo de errores
            },
            editarContacto: (contactId, name, phone, email, address) => { // Añadir la función editarContacto
                const nombreUsuario = 'Javier-Pintado';
                fetch(`https://playground.4geeks.com/contact/${contactId}`, { // Realiza una solicitud PUT a la API para editar el contacto específico
                    method: 'PUT', // Método PUT
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        agenda_slug: nombreUsuario,
                        name: name,
                        phone: phone,
                        email: email,
                        address: address
                    })
                })
                .then(resp => resp.json())
                .then(updatedContact => {
                    const store = getStore();
                    const updatedContactos = store.contactos.map(contacto =>
                        contacto.id === contactId ? updatedContact : contacto // Actualiza el contacto en el store local
                    );
                    setStore({ contactos: updatedContactos }); // Actualiza el store local con el contacto editado
                })
                .catch(error => console.log(error)); // Manejo de errores
            }
        }
    };
};
export default getState;
