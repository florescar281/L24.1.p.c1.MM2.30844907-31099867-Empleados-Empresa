/*
Se dispone de los siguientes datos de varios empleados: (nombre, sexo, edad)
(Mary, ‘F’, 43), (José, ‘M’, 40), (Carlos, ‘M’, 30), (Pedro, ‘M’, 50), (Mery, ‘F’, 45), (Liz, ‘F’, 50)
Promedio de edad de los hombres: 36,66
Mayor edad entre las mujeres es: 50 y la tiene Liz
*/
import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Empleado from "./Cl_Empleado.js";

const salida = document.getElementById("salida");

let e = new Cl_Empresa();

let empleado1 = new Cl_Empleado("Mary", "F", 43);
let empleado2 = new Cl_Empleado("José", "M", 40);
let empleado3 = new Cl_Empleado("Carlos", "M", 30);
let empleado4 = new Cl_Empleado("Pedro", "M", 50);
let empleado5 = new Cl_Empleado("Mery", "F", 45);
let empleado6 = new Cl_Empleado("Liz", "F", 50);

e.procesarEmpleados(empleado1);
e.procesarEmpleados(empleado2);
e.procesarEmpleados(empleado3);
e.procesarEmpleados(empleado4);
e.procesarEmpleados(empleado5);
e.procesarEmpleados(empleado6);

salida.innerHTML = `
Promedio de edad de los hombres: ${e.promedioEdadHombres()}. <br>
Mayor edad entre las mujeres es: ${e.mujerConMasEdad()} y la tiene ${e.devolverMayores()}.
`;