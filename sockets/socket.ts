import { UsuariosController } from './../clases/usuariosController';
import { Socket } from "socket.io";
import socketIO from 'socket.io';
import { Usuario } from '../clases/usuario';



export const usuariosConectados = new UsuariosController();


//Conectar Cliente
export const conectarCliente = (cliente: Socket) => {

    const usuario = new Usuario(cliente.id);
    usuariosConectados.AgregarUsuario(usuario);

}


//Desconectar
export const desconectar = (cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente Desconectado');
        usuariosConectados.BorrarUsuario(cliente.id);
    });

}

//Escuchar Mensajes
export const mensaje = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('mensaje', (data: Mensaje) => {
        console.log(data);
        io.emit('mensaje-nuevo', data);
    });

}

//Escuchar Configurar Usuario
export const config_usuario = (cliente: Socket, io: socketIO.Server) => {

    cliente.on('configurar-usuario', (data, callback: Function) => {
        console.log(data);
        io.emit('configurar-usuario', data);
        usuariosConectados.ActualizarNombre(cliente.id, data.nombre);
        callback({
            ok: true,
            mensaje: 'Usuario ' + data.nombre + ', configurado'
        });
    });

}




interface Mensaje {
    de: string;
    mensaje: string;
}