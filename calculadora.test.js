const{ somar, subtrair, dividir, multiplicar} = require('./calculadora')

                                //corretamente
test('Deve somar dois numeros corretamente', ()=>{
    expect(somar(2, 3)).toBe(5)
    expect(somar(-1, 1)).toBe(0)
    expect(somar(0, 0)).toBe(0)
})

test('Deve subtrair dois numeros corretamente', ()=>{
    expect(subtrair(10, 5)).toBe(5)
    expect(subtrair(0, 5)).toBe(-5)
    expect(subtrair(-3, -5)).toBe(2)
})

                                    //corretamente
test('Deve dividir dois numeros corretamente', ()=>{
    expect(dividir(10, 2)).toBe(5)
    expect(dividir(-6, 2)).toBe(-3)
})

test('Erro ao dividir', ()=>{
    expect(() => dividir(10, 0)).toThrow('Divisão por zero!')
})