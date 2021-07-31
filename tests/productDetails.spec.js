const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const ret = productDetails('Alcool gel', 'Máscara');
    let isEqual = JSON.stringify(ret[0]) === JSON.stringify(ret[1]);
    assert.strictEqual(Array.isArray(ret), true);
    assert.strictEqual(ret.length, 2);
    assert.strictEqual(typeof ret[0], 'object');
    assert.strictEqual(typeof ret[1], 'object');
    assert.strictEqual(isEqual, false);
    assert.strictEqual(ret[0].details.productId.slice(-3), '123');
    assert.strictEqual(ret[1].details.productId.slice(-3), '123');
  });
});
