import { DataTypes } from "sequelize";
import sequelize from "./index";
import { User } from "./user";

// 定义一个 "User" 模型
const Question = sequelize.define(
  "Question",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    question_text: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {}
);
