const {Customer} = require ("../models")

const createCustomer = async (req,res) => {
    // destructuring object
    const {name,age,email, city} = req.body
    try{
        const nrwCustomer = await Customer.create({
            name,
            age,
            email,
            city,
        })
        res.status(200).json({
            status: "success",
            data: {
                newCustomer,
            },
        })
    }catch(err){
        console.log(err.message)
    }
}