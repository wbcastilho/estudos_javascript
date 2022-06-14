class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = saldo;
    }
    
    get saldo() {
        return this._saldo;
    }

    set saldo(val) {
        this._saldo = val;
    }

    sacar(valor) {
        if(valor > this._saldo)
            return "Operação negada!";

        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito) {
        super(agencia, numero, saldo);
        this._tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(val) {
        this._cartaoCredito = val;
    }
}