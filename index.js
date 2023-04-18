//Definición de clases
import {Cliente} from "./Cliente.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Director } from "./Empleados/Director.js";
import { Gerente } from "./Empleados/Gerente.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

const cliente = new Cliente("Leonardo","1231231231","1231231");
cliente.asignarClave("11101");
console.log(SistemaAutenticacion.login(cliente,"1111"));
//const cliente2 = new Cliente("Sofía","1231231232","1231232");

const empleado = new Empleado("Juan Perez","1234561231",1000);
empleado.asignarClave("12345");
const gerente = new Gerente("Pedro Rivas","1234561232",1200);
gerente.asignarClave("12312")
const director = new Director("Elena Moreno","1234561233",1500);

console.log(SistemaAutenticacion.login(empleado,"12345"));
console.log(SistemaAutenticacion.login(gerente,"12311"));