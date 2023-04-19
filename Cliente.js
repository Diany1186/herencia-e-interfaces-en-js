export class Cliente
{
    nombreCliente;
    dniCliente;
    rucCliente;
    #clave;

    constructor(nombreCliente, dniCliente, rucCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rucCliente = rucCliente;
        this.#clave = "";
    }
    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave) {
        return true;
    }
}
