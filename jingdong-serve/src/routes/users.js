const router = require('koa-router')()
const { register } = require('../controller/register')
const { SuccessModel, ErrorModel } = require('../res-model/index');
router.prefix('/api/user');

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

module.exports = router
