create table items (
  id SERIAL PRIMARY KEY, 
  type VARCHAR(100) NOT NULL, 
  cost INTEGER NOT NULL, 
  quantity INTEGER NOT NULL);


insert into items (type, cost, quantity) VALUES ('candy', 1, 5);
insert into items (type, cost, quantity) VALUES ('chips', 2, 5);
insert into items (type, cost, quantity) VALUES ('drink', 3, 5);

sequelize model:create --name Items --attributes 'item:string quantity_sold:string date:integer price:integer'


sequelize model:create --name Purchases --attributes 'item:string quantity_sold:string date:integer price:integer'


For this project, you will create a JSON API for a vending machine. This machine has a list of items for sale with their ids, descriptions, and costs. It also keeps track of all machine transactions with time of transaction.

In previous lessons, we covered testing with Jest, test-driven development (TDD), and testing database models. Using test-driven development is recommended for this project, but not required. To use test-driven development, write the test for a piece of functionality first, make it pass, and then start on the next test.

A specification for the API is provided.

Features  

The following features must exist. Each one may have one than more test around it.

1. A customer should be able to get a list of the current items, their costs, and quantities of those items
2. A customer should be able to buy an item using money
3. A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.
4. A customer should not be able to buy items that are not in the machine, but instead get an error


A vendor should be able to see total amount of money in machine
A vendor should be able to see a list of all purchases with their time of purchase
A vendor should be able to update the description, quantity, and costs of items in the machine
A vendor should be able to add a new item to the machine
Note that this API does not require authentication.

You can use either MongoDB or PostgreSQL for your data store.

API specification  

All responses from the API should be an object with a "status" key and a "data" key. Successful actions will have a status of "success" and failed actions will have a status of "fail." The "data" key will hold whatever output data is necessary.

Example: a customer gets a list of items

{
  "status": "success",
  "data": [
    {
      "id": 1,
      "description": "Corn chips",
      "cost": 65,
      "quantity": 4
    },
    {
      "id": 2,
      "description": "Gum",
      "cost": 35,
      "quantity": 10
    },
    // ...
  ]
}

Example: a customer tries to buy an item but does not give enough money.

{
  "status": "fail",
  "data": {
    "money_given": 50,
    "money_required": 65
  }
}


Your actual data for these may look different, but should include similar information. All references to money should be in cents.

API endpoints  

The following is a recommended list of API endpoints:

GET /api/customer/items - get a list of items
POST /api/customer/items/:itemId/purchases - purchase an item
GET /api/vendor/purchases - get a list of all purchases with their item and date/time
GET /api/vendor/money - get a total amount of money accepted by the machine
POST /api/vendor/items - add a new item not previously existing in the machine
PUT /api/vendor/items/:itemId - update item quantity, description, and cost
