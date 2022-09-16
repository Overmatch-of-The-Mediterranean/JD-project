const router = require('koa-router')()
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index');
router.prefix('/api/user');

// 注册
router.post('/register', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  try {
    const newUser = await register(username, password);
    // 使用class语法，修改大量相同数据，比较方便
    ctx.body = new SuccessModel(newUser);
  } catch (ex) {
    // ctx.body = {
    //   errno: 10001,
    //   data: newUser,
    //   message: `注册失败---${ex.message}`
    // }
    ctx.body = new ErrorModel(10001, `注册失败---${ex.message}`)
  }
})

// 登录
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const res = await login(username, password);
  if (res) {
    // 登录成功
    ctx.session.userInfo = { username }   // 写这个，可以返回cookie
    ctx.body = new SuccessModel();
  } else {
    // 登录失败
    ctx.body = new ErrorModel(10002, '登录失败')
  }
})
module.exports = router
