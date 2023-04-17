//Definición de clases
import {Cliente} from "./Cliente.js";
import {CuentaCorriente} from "./CuentaCorriente.js";
import {CuentaAhorro } from "./CuentaAhorro.js";

const cliente = new Cliente("Leonardo","1231231231","1231231");
const cuentaLeonardo = new CuentaCorriente(cliente,"1","001");

const cliente2 = new Cliente("Sofía","1231231232","1231232");
const cuentaSofia = new CuentaCorriente(cliente2,"2","002");

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, "9985","001",0);

console.log(cuentaLeonardo);
cuentaLeonardo.depositoEnCuenta(150);
console.log(cuentaLeonardo.verSaldo());
cuentaLeonardo.retirarDeCuenta(50);
console.log(cuentaLeonardo.verSaldo());
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(100);
console.log(cuentaAhorroLeonardo.verSaldo());
