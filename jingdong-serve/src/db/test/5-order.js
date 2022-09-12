/**
 * @description  模拟数据操作-订单操作
 * @author  地中海强者
 */
const Order = require('../../models/Order');
const Address = require('../../models/Address');
const Product = require('../../models/Product');
!(async () => {
  // 创建订单
  const requestBody = {
    addressId: '631d8f35c8d9ffec28681a77',
    shopId: '631d9b697b9a3de66b38f357',
    shopName: '沃尔玛',
    isCancel: false,    // 是否取消订单
    products: [{   //复制关系
      id: '631da34de4a3ef8ed3f51d49',
      count: 5
    },
    {
      id: '631da34de4a3ef8ed3f51d4c',
      count: 2
    }]
  }

  // 获取地址
  const address = await Address.findById(requestBody.addressId);
  // console.log(address, 111);
  // 获取商品
  const pIds = requestBody.products.map(p => p.id);
  const productList = await Product.find({
    shopId: requestBody.shopId,
    _id: {
      $in: pIds
    }
  });
  // console.log(productList);

  // 获取商品销售量
  const productListWithSales = productList.map(p => {
    const id = p._id.toString();
    const filterProducts = requestBody.products.filter(item => item.id === id);
    if (filterProducts.length === 0) {
      throw Error('未找到匹配的销售数据');
    }
    return {
      product: p,
      orderSales: filterProducts[0].count
    }
  });
  // console.log(pIds);
  // console.log(productListWithSales);
  await Order.create({
    shopId: requestBody.shopId,
    shopName: requestBody.shopName,
    isCancel: false,
    address,
    products: productListWithSales
  });
})()