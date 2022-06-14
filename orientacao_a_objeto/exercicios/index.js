class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = tipo;
        this._saldo = 0;
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
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
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

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this._tipo = 'poupanca';       
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this._tipo = 'universitária';       
    }

    sacar(valor) {
        if(valor > 500) {
            return "Operação negada!";
        }

        this._saldo = this._saldo - valor;
    }
}