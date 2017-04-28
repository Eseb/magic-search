const expect = require('expect');
const search = require('./index.js');

describe('magic-search', () => {
  it('filters an array to only the correct characters', () => {
    const scope = [
      'dog',
      'doggo',
      'big dog',
      'little doge',
      'cat',
      'kitty',
      'mouse',
    ];

    const result = search(scope, 'dog');

    expect(result.length).toBe(4);
    expect(result).toInclude('dog');
    expect(result).toInclude('doggo');
    expect(result).toInclude('big dog');
    expect(result).toInclude('little doge');
  });

  it('uses a getter function if specified', () => {
    class SimpleStore {
      constructor(value) {
        this.value = value;
      }

      getValue() {
        return this.value;
      }
    }

    const scope = [
      new SimpleStore('cat'),
      new SimpleStore('kitty-cat'),
      new SimpleStore('catasaurus rex'),
      new SimpleStore('butthole'),
      new SimpleStore('crazy cat lady'),
    ];

    const result = search(scope, 'cat', item => item.getValue());

    expect(result.length).toBe(4);
    expect(result).toInclude(new SimpleStore('cat'));
    expect(result).toInclude(new SimpleStore('kitty-cat'));
    expect(result).toInclude(new SimpleStore('catasaurus rex'));
    expect(result).toInclude(new SimpleStore('crazy cat lady'));
  });
});
