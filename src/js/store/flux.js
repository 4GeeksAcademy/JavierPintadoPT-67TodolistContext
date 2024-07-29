const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            //Variables
            contactos: []
        },
        actions: {
        //Funciones
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
                const nombreUsuario = 'Javier-Pintado'
                fetch(`https://playground.4geeks.com/contact/agendas/${nombreUsuario}`)
                .then(resp => resp.json())
                .then(data => setStore({contactos: data.contacts}))
            },
            crearContacto: ({name, phone, email, address}) => {
                const nombreUsuario = 'Javier-Pintado'
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
            }
        }
    };
};
export default getState;