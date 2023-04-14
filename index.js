//Definición de clases
import {Cliente} from "./Cliente.js";
//import {CuentaCorriente} from "./CuentaCorriente.js";
//import {CuentaAhorro } from "./CuentaAhorro.js";
import { Cuenta} from "./Cuenta.js";

const cliente = new Cliente("Leonardo","1231231231","1231231");
const cuentaLeonardo = new Cuenta(cliente,"1","001",0);

const cliente2 = new Cliente("Sofía","1231231232","1231232");
const cuentaSofia = new Cuenta(cliente2,"2","002",0);

const cuentaAhorroLeonardo = new Cuenta(cliente, "9985","001",0);

console.log(cuentaLeonardo);
cuentaLeonardo.depositoEnCuenta(150);
console.log(cuentaLeonardo.verSaldo());
cuentaLeonardo.retirarDeCuenta(50);
console.log(cuentaLeonardo.verSaldo());
cuentaLeonardo.transferirParaCuenta(30,cuentaAhorroLeonardo);
console.log(cuentaAhorroLeonardo.verSaldo());
