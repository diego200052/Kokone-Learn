export class Alumno{
    nombre:string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    usuario: string;
    correo: string;
    password:string;
    escuela: string;
    

    //Recibe los parametros y asigna el valor 
    constructor( n:string, apPaterno: string, apMaterno: string, username: string,
        correo:string, contr: string, escuela: string)
    {
        this.nombre=n;
        this.apellidoMaterno = apMaterno;
        this.apellidoPaterno = apPaterno;
        this.usuario = username;
        this.password = contr;
        this.escuela = escuela;
        this.correo = correo;
    }


}