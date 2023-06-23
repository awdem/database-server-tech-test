const keyModel = require('../../models/keyModel');


describe('KeyModel class', () => {
  let model;

  beforeEach(() => {
    model = new keyModel;
  })
  
  it('constructs', () => {    
    expect(model).toBeTruthy();
    expect(model).toHaveProperty('storedPair', {});
  })

  describe('#getStoredPair', () => {
    it('returns the stored pair', () => {
      expect(model.getStoredPair()).toEqual({});
    })
  })

  describe('#setStoredPair', () => {
    test('given a key-value pair, it sets dbPair to it', () => {
      keyValuePair = {
        pizza: 'delicious',
      };

      model.setStoredPair(keyValuePair);

      expect(model.getStoredPair()).toEqual(keyValuePair);
    })
  })

  // future edge cases

});
