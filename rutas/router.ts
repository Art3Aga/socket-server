



import { Router, Request, Response } from "express";
import Server from "../clases/server";


const router = Router();


router.post('/mensajeTODOS', (reques, res) => {

    const mensaje = reques.body.mensaje;
    const de = reques.body.de;


    const server = Server.instancia;
    const data = { de, mensaje };

    server.io.emit('mensaje-nuevo', data);

    res.json({
        ok: true,
        mensaje,
        de
    });

});

router.post('/mensajeUsuario/:id', (reques, res) => {


    const cuerpo = reques.body.cuerpo;
    const de = reques.body.de;
    const id = reques.params.id;


    const server = Server.instancia;
    const data = {
        de, cuerpo
    };
    //servidor de sockets, el usuario conectado tiene un id y una sala en particular, ambas con el nombre del id
    //el metodo *in* manda un mensaje a una sala en particular, pero como el usuario conectado tiene una sala y un id del mismo nombre
    //entonces le pasamos el id del usuario, y con eso enviamos mensajes a un usuario en especifico
    server.io.in(id).emit('mensajes-privados', data);


    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});


export default router;