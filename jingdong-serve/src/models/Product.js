/**
 * @description  Product Model
 * @author  地中海强者
 */
const mongoose = require('../db/db');
const Schema = mongoose.Schema({
  shopId: {
    type: String,
    require: true, // 商品与商店一对一，商品依附于商店
  },
  imgUrl: String,
  name: String,
  sales: Number,
  price: Number,
  oldPrice: Number,
  tabs: [String]  //示例   tabs: ['all','seckill']
}, { timestamps: true });
const Product = mongoose.model('product', Schema);
module.exports = Product;
