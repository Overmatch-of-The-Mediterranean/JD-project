/**
 * 登陆验证中间件
 * @author 地中海强者
 */
const { ErrorModel } = require('../res-model/index');

module.exports = async (ctx, next) => {
  const session = ctx.session;
  if (session && session.userInfo) {
    await next();
    return;
  }
  ctx.body = new ErrorModel(10003, '登陆验证失败')
}