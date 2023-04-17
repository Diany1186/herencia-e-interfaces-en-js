//Definición de clases
import {Cliente} from "./Cliente.js";
import {CuentaCorriente} from "./CuentaCorriente.js";
import {CuentaAhorro } from "./CuentaAhorro.js";
import { Cuenta } from "./Cuenta.js";

const cliente = new Cliente("Leonardo","1231231231","1231231");
const cuentaLeonardo = new CuentaCorriente(cliente,"1","001");

const cliente2 = new Cliente("Sofía","1231231232","1231232");
const cuentaSofia = new CuentaCorriente(cliente2,"2","002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "9985","001",0);
console.log(cuentaAhorroLeonardo);

const cuentaSimple = new Cuenta(cliente, "098", "001", 100);

console.log(cuentaSimple);