export class SistemaAutenticacion {
    static login(usuario,clave) {
        if ("autenticable" in usuario && usuario.autenticable instanceof Function)//verificando que usuario tenga una función autenticable y que sea de tipo función
            return usuario.autenticable(clave);
        else
            return false;
    }
}