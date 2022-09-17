/**
 * @description  Address Model
 * @author  地中海强者
 */
const mongoose = require('../db/db')
const Schema = mongoose.Schema({
  username: String,
  shopId: String,
  shopName: String,
  isCancel: {
    type: Boolean,
    default: false
  },    // 是否取消订单
  address: {
    username: {
      type: String,
      require: true
    },  // 和用户产生关联
    city: String,
    department: String,
    name: String,
    houseNumber: String,
    phone: String  // 与用户的可能不一样
  },
  products: [
    {
      product: {
        shopId: String, // 和商店的_id对应
        imgUrl: String,
        name: String,
        sales: Number,
        price: Number,
        oldPrice: Number,
        tabs: [String]
      },
      orderSales: Number
    }
  ]
}, { timestamps: true });
const Order = mongoose.model('order', Schema);
module.exports = Order;