export default class Cl_Empresa {
    constructor(){
        this.acumEdadHombres = 0;
        this.contHombres = 0;
        this.mayor = 0;
        this.auxNombre = " ";
    }

    procesarEmpleados(e){
        if(e.sexo == "M"){
            this.acumEdadHombres += e.edad;
            this.contHombres++;
        }
        
        if(e.sexo == "F" && e.edad > this.mayor){
            this.mayor = e.edad;
            this.auxNombre = e.nombre;
        }
    }

    promedioEdadHombres(){
        return this.acumEdadHombres / this.contHombres;
    }
    mujerConMasEdad(){
        return this.auxNombre;
    }

    devolverMayores(){
        return this.mayor;
    }

}