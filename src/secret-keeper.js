/** Class for keeping secrets */
class SecretKeeper {
  /**
   * Create an instance of the SecretKeeper singleton if one does not exist.
   * Otherwise, returns the existing instance.
   * @param {string} name - The name for keeping the secrets.
   * @throws {SyntaxError} if `name` is not provided.
   */
  constructor(name) {
    if (SecretKeeper.instance) {
      return SecretKeeper.instance;
    } else {
      SecretKeeper.instance = this;
    }

    // Set name if given
    if (name) {
      this.name = name;
    } else {
      throw new SyntaxError("name parameter is required!");
    }

    // Create Local Storage if it doesn't exist
    if (!localStorage.getItem(this.name)) {
      console.log(`created local storage for ${this.name}`);
      this.data = {};
      localStorage.setItem(this.name, JSON.stringify(this.data));
    } else {
      console.log(`storage for ${this.name} already exists`);
      this.data = JSON.parse(localStorage.getItem(this.name));
    }
  }

  /**
   * Gets the value for the secret.
   * @param {string} key - The key for the secret.
   * @returns {string}
   */
  getItem(key) {
    if (Object.keys(this.data).includes(key)) {
      console.log(`getValue(${key}) = ${this.data[key]}`);
      return this.data[key];
    } else {
      return this.setItem(key);
    }
  }

  /**
   * Sets the value of the secret. Will prompt user if `value` is not provided.
   * @param {string} key - The key for the secret.
   * @param {string} value - The value of the secret.
   * @returns {string}
   */
  setItem(key, value) {
    if (!value) {
      value = prompt(`Please enter value for ${key}:`);
    }
    this.data[key] = value;
    localStorage.setItem(this.name, JSON.stringify(this.data));
    return this.data[key];
  }
}

export { SecretKeeper };
