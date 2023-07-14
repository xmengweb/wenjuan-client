import Router from "@koa/router";
import { getUserQuestionList } from "src/services/question";

const router = new Router();

//获取某个用户的问卷列表
router.get("/question/:userId", getUserQuestionList);

export { router };

export default router;
