import { MetodosCondicionales } from "./Metodos-etc"

describe('probando metodos',()=>{
    let componente : MetodosCondicionales;

    beforeEach(()=>{
        componente = new MetodosCondicionales();
    });

it('probando metodo de palindromo',()=>{
    expect(componente.esPalindromo('radar')).toBe(true);
})

it('probando metodo de palindromo',()=>{
    expect(componente.esPalindromo('hola')).toBe(false);
})

})