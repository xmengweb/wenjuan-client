import { DataTypes } from "sequelize";
import sequelize from "./index";

// 定义一个 "User" 模型
export const User = sequelize.define(
  "User",
  {
    // 在这里定义数据模式
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {}
);
