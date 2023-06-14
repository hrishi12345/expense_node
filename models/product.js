const db = require('../util/database');

module.exports = class Product {
  constructor(expenseAmount, expenseDescription, expenseCategory) {
    this.expenseAmount = expenseAmount;
    this.expenseDescription = expenseDescription;
    this.expenseCategory = expenseCategory;
  }

  save() {
    return db
      .execute(
        'INSERT INTO products (username, phoneNumber, email) VALUES (?, ?, ?)',
        [this.username, this.phoneNumber, this.email]
      )
      .then(result => {
        console.log('Product saved successfully.');
      })
      .catch(error => {
        console.log('An error occurred while saving the product:', error);
        throw error;
      });
  }
  static fetchAll() {
    return db
      .execute('SELECT * FROM expenses')
      .then(([rows, fieldData]) => {
        console.log(rows)
        return rows;
      })
      .catch(error => {
        console.log('An error occurred while fetching products:', error);
        throw error;
      });
  }
  
  
};
