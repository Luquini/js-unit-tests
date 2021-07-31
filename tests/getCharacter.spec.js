/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}

OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste para a função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    assert.strictEqual(getCharacter(), undefined);

    const expectedResult = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    }

    assert.deepStrictEqual(JSON.stringify(getCharacter('Arya')), JSON.stringify(expectedResult));

    const expectedResult2 = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.'
      ]
    }

    assert.deepStrictEqual(JSON.stringify(getCharacter('Brienne')), JSON.stringify(expectedResult2));

    const expectedResult3 = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.'
      ]
    }

    assert.deepStrictEqual(JSON.stringify(getCharacter('Melissandre')), JSON.stringify(expectedResult3));

    assert.strictEqual(JSON.stringify(getCharacter('Daenerys')), undefined);
    
    assert.strictEqual(JSON.stringify(getCharacter('ArYa')), JSON.stringify(expectedResult));
    assert.strictEqual(JSON.stringify(getCharacter('ARYA')), JSON.stringify(expectedResult));
  });
});