import Koa from "koa";
import Router from "@koa/router";
import questionRoute from "./routes/question";

const app = new Koa();
const router = new Router();

router.use("/api", questionRoute.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
