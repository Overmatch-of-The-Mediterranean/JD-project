/**
 * @description  模拟数据操作-用户操作
 * @author  地中海强者
 */
const User = require('../../models/User');
!(async () => {
  // 注册用户信息
  // await User.create({
  //   username: 'zhangsan',
  //   password: '123'
  // });
  // await User.create({
  //   username: 'lisi',
  //   password: 'abc'
  // })

  // 查询用户信息（登录）
  const lisi = await User.findOne({
    username: 'lisi',
    password: 'abc'
  })
  console.log(lisi);
})()