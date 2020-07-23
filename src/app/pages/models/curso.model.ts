export class Curso{
    nombre:string;
    clave:string;
    profesor: string;
    avance: string;
    temaact: string;

    //Recibe los parametros y asigna el valor 
    constructor( n:string, clav: string, prof: string, av: string, tAct: string)
    {
        this.nombre=n;
        this.clave = clav;
        this.profesor = prof;
        this.avance = av;
        this.temaact = tAct;
    }


}