import { primeiraLetraMaiuscula } from './primeiraLetraMaiuscula'

describe('Funcao primeiraLetraMaiuscula', () => {
  it('deve retornar apenas a primeira letra maiuscula', () => {
    expect(primeiraLetraMaiuscula('teste')).toStrictEqual('Teste')
    expect(primeiraLetraMaiuscula('workshop')).toStrictEqual('Workshop')
    expect(primeiraLetraMaiuscula('testando Com Jest')).toStrictEqual('Testando Com Jest')
    expect(primeiraLetraMaiuscula('alEatorio')).toStrictEqual('AlEatorio')
  })
})