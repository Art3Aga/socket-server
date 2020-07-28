



import { Router, Request, Response } from "express";


const router = Router();


router.get('/mensajesGET', (reques, res) => {

    res.json({
        ok: true,
        mensaje: 'Todo Bien, Todo Correcto'
    });

});

router.post('/mensajesPOST/:id', (reques, res) => {


    const cuerpo = reques.body.cuerpo;
    const de = reques.body.de;
    const id = reques.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });

});


export default router;