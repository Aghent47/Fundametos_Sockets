// referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    // console.log('Connected to server');

    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {
    // console.log('Disconnected from server');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});

socket.on('enviar-mensaje', ( peyload ) =>  {
    console.log('Server:', peyload);
});

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: new Date().getTime(),
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el Server', id);
    } );
});
