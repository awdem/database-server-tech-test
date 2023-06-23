class keyModel {
  constructor() {
    this.storedPair = {};
  }

  setStoredPair(keyValuePair) {
    this.storedPair = keyValuePair;
  }

  getStoredPair() {
    return this.storedPair;
  }
}

module.exports = {keyModel};
