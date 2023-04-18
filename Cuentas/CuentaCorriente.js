import { Cliente } from "../Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta{
    static cantidadCuentas = 0;//hace que el atributo cantidadCuentas sea común para todos los objetos de este tipo (es un atributo estático)
   
    constructor (cliente, numero, agencia) {        
        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }

    retirarDeCuenta (valor) {
        super._retirarDeCuenta(valor,5);
    }
}