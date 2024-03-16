import { Users } from './users';
import { Clients } from './clients';
import { Suppliers } from './suppliers';
import { Categories } from './categories';
import { Products } from './products';
import { Movements } from './movements';

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
