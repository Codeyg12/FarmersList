const { Customer } = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    let newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer);
  }

  login(email) {
    return this.customers.find((e) => e.email === email) || null;
  }
}

module.exports = {
  Auth,
};
