/**
 * @description shop router
 * @author 地中海强者
 */
const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index');
const loginCheck = require('../middleware/loginCheck')
const { getNearbyShops,
  getShopById,
  getShopByshopId } = require('../controller/shop')
router.prefix('/api/shop');

// 获取附近店铺
router.get('/hot-list', async (ctx, next) => {
  try {
    const shopList = await getNearbyShops();
    ctx.body = new SuccessModel(shopList)
  } catch (ex) {
    ctx.body = new ErrorModel(10008, `获取附近店铺失败--${ex.message}`)
  }
})

// 获取具体某个店铺
router.get('/:id', async (ctx, next) => {
  const id = ctx.params.id;

  try {
    const shop = await getShopById(id);
    ctx.body = new SuccessModel(shop);
  } catch (ex) {
    ctx.body = new ErrorModel(10009, `获取具体店铺失败${ex.message}`)
  }
})

// 获取店铺的商品列表
router.get('/:id/products', async (ctx, next) => {
  const shopId = ctx.params.id;
  const tab = ctx.query.tab || 'all';
  const shop = await getShopByshopId(shopId, tab);
  ctx.body = new SuccessModel(shop);
})
module.exports = router