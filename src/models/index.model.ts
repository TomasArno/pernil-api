import { Users } from './users.model';
import { Clients } from './clients.model';
import { Suppliers } from './suppliers.model';
import { Categories } from './categories.model';
import { Subcategories } from './subcategories.model';
import { Products } from './products.model';
import { Movements } from './movements.model';
import { Auth } from './auth.model';

// USERS

Users.hasMany(Movements);
Users.hasOne(Auth);

// CLIENTS

Clients.hasMany(Movements);

// SUPPLIERS

Suppliers.hasMany(Movements);

// CATEGORIES

Categories.hasMany(Products);
Categories.hasMany(Subcategories);

// SUBCATEGORIES

Subcategories.belongsTo(Categories);

// PRODUCTS

Products.hasMany(Movements);
Products.belongsTo(Categories);

// MOVEMENTS

Movements.belongsTo(Users);
Movements.belongsTo(Clients);
Movements.belongsTo(Suppliers);
Movements.belongsTo(Products);

export {
  Auth,
  Users,
  Clients,
  Suppliers,
  Categories,
  Subcategories,
  Products,
  Movements,
};
