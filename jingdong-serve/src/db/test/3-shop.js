/**
 * @description  模拟数据操作-商店操作
 * @author  地中海强者
 */
const Shop = require('../../models/Shop');
!(async () => {
  await Shop.create({
    name: '沃尔玛',
    imgUrl: '/images/shop/wmt.jpeg',
    sales: 10000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享 ，满100减10'
  })

  await Shop.create({
    name: '山姆会员商店',
    imgUrl: '/images/shop/sam.jpeg',
    sales: 2000,
    expressLimit: 0,
    expressPrice: 5,
    slogan: 'VIP尊享 ，满100减15'
  })
})()