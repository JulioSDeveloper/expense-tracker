import {Router} from 'express'
const eRouter=Router();

eRouter.get("/", (req, res) => {
  res.json({ status: "ok" });
});

export default eRouter;