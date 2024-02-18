import { Sequelize, DataTypes, Op } from "sequelize";

const sequelize = new Sequelize(process.env.DB_URL as string, {
  dialect: "postgres",
});

try {
  sequelize.authenticate().then(() => {
    console.log("Connection has been established successfully.");
  });
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export { sequelize, DataTypes, Op };
