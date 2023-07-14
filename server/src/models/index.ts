import { Sequelize, DataTypes } from "sequelize";

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

// 定义一个 "User" 模型
const User = sequelize.define(
  "User",
  {
    // 在这里定义数据模式
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {}
);

// 同步模型到数据库，如果表不存在，则会自动创建
sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

// 创建新用户实例并保存到数据库
User.create({ firstName: "John", lastName: "Doe", email: "john.doe@example.com" })
  .then((user) => {
    console.log(`User created with ID ${user.id}`);
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
