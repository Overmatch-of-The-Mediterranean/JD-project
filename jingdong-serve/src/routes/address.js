/**
 * @description address router
 * @author 地中海强者
 */
const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../res-model/index');
const loginCheck = require('../middleware/loginCheck')
const { addressCreate,
  getAddressList,
  getAddressById,
  updateAddress } = require('../controller/address')

router.prefix('/api/user/address');

// 创建地址
router.post('/', loginCheck, async (ctx, next) => {
  const data = ctx.request.body;
  const { username } = ctx.session.userInfo;
  try {
    const newAddress = await addressCreate(username, data);
    ctx.body = new SuccessModel(newAddress);
  } catch (ex) {
    ctx.body = new ErrorModel(10004, `创建地址失败--${ex.message}`)
  }
})

// 获取地址列表
router.get('/', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo;
  try {
    const addressList = await getAddressList(username);
    ctx.body = new SuccessModel(addressList);
  } catch (ex) {
    ctx.body = ErrorModel(10005, `获取地址列表出错${ex.message}`)
  }
})

// 获取单个地址
router.get('/:id', loginCheck, async (ctx, next) => {
  const id = ctx.params.id;  // '/:xxx',所以要写成ctx.params.xxx
  try {
    const address = await getAddressById(id);
    ctx.body = new SuccessModel(address);
  } catch (ex) {
    ctx.body = new ErrorModel(10006, `获取单个地址出错${ex.message}`);
  }
})

// 更新地址
router.patch('/:id', loginCheck, async (ctx, next) => {
  const { username } = ctx.session.userInfo;
  const id = ctx.params.id;
  const data = ctx.request.body;
  try {
    const address = await updateAddress(id, username, data);
    ctx.body = new SuccessModel(address);
  } catch (ex) {
    ctx.body = new ErrorModel(10007, `更新地址失败${ex.message}`);
  }
})

module.exports = router