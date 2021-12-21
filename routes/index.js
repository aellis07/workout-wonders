const router = require("express").Router();

const apiRoutes = require("./api.js");
const htmlRoutes = require("./htmlroutes.js");

router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

module.exports = router;
