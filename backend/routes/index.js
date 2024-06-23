const { Router } = require("express");
const { authRoutes } = require("./authRoutes");
const auth = require("../middleware/auth");


const router  = Router()

router.use(
  "/auth",
  authRoutes
  /* 
  #swagger.tags = ['Auth']*/
);



module.exports.router = router;