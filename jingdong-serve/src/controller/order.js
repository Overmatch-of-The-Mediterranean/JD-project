const Product = require('../models/Product');
const Address = require('../models/Address');
const Order = require('../models/Order');

/**
 * 创建订单
 * @param {String} username 用户名
 * @param {Object} data 商品详情信息
 */
async function createOrder(username, data) {
  const {
    addressId,
    shopId,
    shopName,
    isCancel = false, // 默认值
    products = []     // 默认值
  } = data

  // 获取地址
  const address = await Address.findById(addressId);

  // 获取购买商品列表
  const pIds = products.map(p => p.id);
  const productList = await Product.find(
    {
      shopId,
      _id: {
        $in: pIds
      }
    }
  )

  // 获取商品销售额并拼接
  const productListWithSales = productList.map(p => {
    const id = p._id.toString();
    const filterProducts = products.map(item => item.id === id);
    if (filterProducts.length === 0) {
      throw Error('未找到匹配的销售数据');
    }
    return {
      product: p,
      orderSales: filterProducts[0].count
    }
  })

  // 创建订单
  const newOrder = await Order.create({
    username,
    address,
    shopId,
    shopName,
    isCancel,
    products: productListWithSales
  })

  return newOrder;
}

// 获取订单列表
async function getOrderList(username) {
  const orderList = await Order.find({ username });
  return orderList
}

module.exports = {
  createOrder,
  getOrderList
}