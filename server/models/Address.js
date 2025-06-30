import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    userId: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    street: {type: String},
    city: {type: String},
    state: {type: String},
    zipcode: {type: String},
    country: {type: String},
    phone: {type: String},
})

const Address = mongoose.models.address || mongoose.model('address', addressSchema)

export default Address