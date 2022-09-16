const Shop = require('../models/Shop')
const Product = require('../models/Product')

/**
 * 获取附近店铺
 */
async function getNearbyShops() {
  const shopList = await Shop.find();
  return shopList
}

/**
 * 获取具体某个店铺
 * @param {String} id 店铺id
 */
async function getShopById(id) {
  const shop = await Shop.findById(id);
  return shop
}

/**
 * 获取商品列表
 * @param {String} shopId 店铺id
 * @param {String} tabs 类型
 * @param {String} shopId 店铺id
 */
async function getShopByshopId(shopId, tab) {
  const shops = await Product.find(
    {
      shopId,
      tabs: {
        $in: tab
      }
    }
  )
  return shops
}
module.exports = {
  getNearbyShops,
  getShopById,
  getShopByshopId
}