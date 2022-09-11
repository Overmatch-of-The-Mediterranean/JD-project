/**
 * @description  Address Model
 * @author  地中海强者
 */
const mongoose = require('../db/db');
const Schema = mongoose.Schema({
  username: {
    type: String,
    require: true   // 因为地址依附于用户，所以是必需
  },
  city: String,
  department: String,
  name: String,
  houseNumber: String,
  phone: String
}, { timestamps: true });
const Address = mongoose.model('address', Schema);
module.exports = Address;