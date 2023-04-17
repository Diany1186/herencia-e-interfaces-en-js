export class Cuenta {
    #cliente;
    #saldo;

    constructor (cliente,numero, agencia, saldo) {

        if (this.constructor == Cuenta) {//verifica que no se esté instanciando un objeto de tipo cuenta, es decir la convierte en una clase abstracta
            throw new Error("No se debe instanciar objetos de la clase Cuenta");//muestra el error y detiene la ejecución si se quiere acceder al constructor de cuenta directamente
        }

        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }
    
    set cliente(valor) {
        if (valor instanceof Cliente)//evita que al atributo cliente se le pueda asignar otro valor que no sea un objeto Cliente
            this.#cliente = valor;
    }

    get cliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
           this.#saldo += valor;
        }
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        _retirarDeCuenta(valor,0);
    }

    _retirarDeCuenta(valor,comision) {
        valor = valor*(1+comision/100);
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        }
        return this.#saldo;
    }

    verSaldo () {
        return this.#saldo;
    }

    transferirParaCuenta (valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}