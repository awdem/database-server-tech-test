const {keyModel} = require('../../models/keyModel');


describe('KeyModel class', () => {
  let model;

  beforeEach(() => {
    model = new keyModel;
  })
  
  it('constructs', () => {    
    expect(model).toBeTruthy();
    expect(model).toHaveProperty('storedPair', {});
  })

  describe('#setStoredPair', () => {
    test('given a key-value pair, it sets dbPair to it', () => {
      keyValuePair = {
        pizza: 'delicious',
      };

      model.setStoredPair(keyValuePair);

      expect(model.storedPair).toEqual(keyValuePair);
    })
  })
});
