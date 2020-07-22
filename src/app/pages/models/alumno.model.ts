export class Alumno{
    nombre:string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    userName: string;
    contraseña:string;
    escuela: string;
    correo: string;

    //Recibe los parametros y asigna el valor 
    constructor( n:string, apPaterno: string, apMaterno: string, username: string,
        contr:string, escuela: string,correo: string)
    {
        this.nombre=n;
        this.apellidoMaterno = apMaterno;
        this.apellidoPaterno = apPaterno;
        this.userName = username;
        this.contraseña = contr;
        this.escuela = escuela;
        this.correo = correo;
    }


}