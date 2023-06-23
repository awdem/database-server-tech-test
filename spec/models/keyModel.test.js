const keyModel = require('../../models/keyModel');


describe('KeyModel class', () => {
  let model

  beforeEach(() => {
    model = new keyModel;
  })
  
  it('constructs', () => {    
    expect(model).toBeTruthy();
  })
});
