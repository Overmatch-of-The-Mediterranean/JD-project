
const User = require('../models/User');

/**
 * 注册功能
 * @param {String} username 用户名
 * @param {String} password 密码
 */
async function register(username, password) {
  const newUser = await User.create({
    username,
    password
  })
  return newUser
}


/**
 * 登录验证功能
 * @param {String} username 用户名
 * @param {String} password 密码
 */
async function login(username, password) {
  const res = await User.findOne({ username, password });
  if (res) {
    // 查询成功
    return true;
  }
  // 查询失败
  return false;
}
module.exports = {
  register,
  login
}