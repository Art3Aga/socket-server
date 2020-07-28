import router from './rutas/router';
import Server from "./clases/server";
import bodyparser from 'body-parser';
import cors from 'cors';



const server = new Server();

//BodyParser
server.app.use(bodyparser.urlencoded({ extended: true }));

server.app.use(bodyparser.json());

//CORS
server.app.use(cors({ origin: true, credentials: true }))


//Rutas
server.app.use('/', router)

server.start( () => {

    console.log('Servidor Corriendo en el puerto', server.port);
    

});
