const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index');
const loginCheck = require('../middleware/loginCheck');
const { createOrder, getOrderList } = require('../controller/order')
router.prefix('/api/order');


// 创建订单
router.post('/', loginCheck, async (ctx, next) => {
  // 获取用户名和请求体
  const { username } = ctx.session.userInfo; // 订单依赖于用户
  const data = ctx.request.body;

  // 创建订单
  try {
    const newOrder = await createOrder(username, data);
    ctx.body = new SuccessModel(newOrder);
  } catch (ex) {
    ctx.body = new ErrorModel(10008, `订单创建失败${ex.message}`);
  }
})

// 获取订单
router.get('/list', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo;
  const orderList = await getOrderList(username);
  ctx.body = new SuccessModel(orderList);

})
module.exports = router