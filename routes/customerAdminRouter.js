const router = require ("express").Router()

const CustomerAdmin = require("../controllers/customerAdminController")

router.post('/', CustomerAdmin.customerPage)

module.exports = router;