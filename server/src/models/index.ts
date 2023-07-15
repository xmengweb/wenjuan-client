import { Sequelize } from "sequelize";

// 初始设置 - 使用SQLite作为数据库
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../../wenjuan.db",
});
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
