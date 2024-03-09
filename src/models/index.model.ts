import { Users } from './users/model';
import { Clients } from './clients/model';
import { Suppliers } from './suppliers/model';
import { Categories } from './categories/model';
import { Products } from './products/model';
import { Movements } from './movements/model';

// USERS

Users.hasMany(Movements);

// CLIENTS

Clients.hasMany(Movements);

// SUPPLIERS

Suppliers.hasMany(Movements);

// CATEGORIES

Categories.hasMany(Products);

// PRODUCTS

Products.hasMany(Movements);
Products.belongsTo(Categories);

// MOVEMENTS

Movements.belongsTo(Users);
Movements.belongsTo(Clients);
Movements.belongsTo(Suppliers);
Movements.belongsTo(Products);

export { Users, Clients, Suppliers, Categories, Products, Movements };
