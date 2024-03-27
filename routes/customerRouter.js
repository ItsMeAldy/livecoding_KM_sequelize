const router =require ("express").Router();

const customer = require("../controller/customerControllers");

router.post("/",Customer.createCustomer);

module.exports = router;