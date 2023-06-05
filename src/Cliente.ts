import Endereco from "./Endereco"
import Telefone from "./Telefone"

export default class Cliente 
{
    private _nome: string
    private _cpf: string
    private _dataNascimento: number
    private _sexo: string
    private _endereco: Endereco
    private _telefones: Telefone

    /* Vai ser sexo ou genero?
    enum Sexo{
        MASCULINO = "MASCULINO",
        FEMININO = "FEMININO"
    }
    */

    constructor(nome: string, cpf: string, dataNascimento: number, sexo: string, endereco: Endereco, telefone: Telefone)
    {
        this._nome = nome
        this._cpf = cpf
        this._dataNascimento = dataNascimento
        this._sexo = sexo
        this._endereco = endereco
        this._telefones = telefone
    }

    get nome(): string
    {
        return this._nome
    }  
    get cpf(): string
    {
        return this._cpf
    }
    get dataNascimento(): number
    {
        return this._dataNascimento
    }
    get sexo(): string
    {
        return this._sexo
    }
    get endereco(): Endereco
    {
        return this._endereco
    }
    get telefones(): Telefone
    {
        return this._telefones 
    }

    set nome(nome: string)
    {
        this._nome = nome
    }
    set cpf(cpf: string)
    {
        this._cpf = cpf
    }
    set dataNascimento(dataNascimento: number)
    {
        this._dataNascimento = dataNascimento
    }
    set sexo(sexo: string)
    {  
        this._sexo = sexo
    }
    set endereco(endereco: Endereco)
    {
        this._endereco = endereco
    }
    set telefones(telefone: Telefone)
    {
        this._telefones = telefone
    }
}