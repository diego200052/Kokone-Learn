export class Profesor{
    nombre:string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    userName: string;
    contraseña:string;
    correo: string;

    //Recibe los parametros y asigna el valor 
    constructor( n:string, apPaterno: string, apMaterno: string, username: string,
        contr:string, correo: string)
    {
        this.nombre=n;
        this.apellidoMaterno = apMaterno;
        this.apellidoPaterno = apPaterno;
        this.userName = username;
        this.contraseña = contr;
        this.correo = correo;
    }


}