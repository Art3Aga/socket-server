import { Usuario } from "./usuario";




export class UsuariosController {


    private lista_usuarios: Usuario[] = [];


    constructor() {}


    //Agregar Usuario
    public AgregarUsuario(usuario: Usuario) {
        
        this.lista_usuarios.push(usuario);

        return usuario;

    }
    //Actualizar Nombre Usuario
    public ActualizarNombre(id: string, nombre: string) {

        this.lista_usuarios.forEach(user => {

            if(user.id == id) {
                user.nombre = nombre;
            }

        });

    }


    //Obtener Lista de Usuarios Conectados en Total
    public GetListaUsuarios() {

        return this.lista_usuarios;

    }


    //Obtener un Usuario
    public GetUsuario(id: string) {

        return this.lista_usuarios.find(user => user.id === id);

    }

    //Obtener Usuarios de una Sala
    public GetUsuariosBySala(sala: string) {

        return this.lista_usuarios.filter(user => user.sala === sala);

    }

    //Borrar Usuario
    public BorrarUsuario(id: string) {

        const userTem = this.GetUsuario(id);

        this.lista_usuarios = this.lista_usuarios.filter(user => user.id !== id);

        return userTem;

    }




}