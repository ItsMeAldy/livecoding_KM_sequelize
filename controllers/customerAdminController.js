const {Customer} = require ("../models")

const customerPage = async (req, res) => {
    try{
        const customers = await Customer.findAll();
         res.render("customers/index.ejs",{
            customers,
         })
    }catch(err){
        res.render("error.ejs",{
            message:err.message,
        })
    }
    
}

module.exports = {
    customerPage,
};