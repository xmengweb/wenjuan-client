import type { Context } from "koa";

const getUserQuestionList = async (ctx: Context) => {
  ctx.body = { msg: "hah" };
};

export { getUserQuestionList };
