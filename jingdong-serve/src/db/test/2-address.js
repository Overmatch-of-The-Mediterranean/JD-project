/**
 * @description  模拟数据操作-地址操作
 * @author  地中海强者
 */
const Address = require('../../models/Address')
!(async () => {
  // 创建地址
  await Address.create({
    username: 'zhangsan',
    city: '深圳',
    department: 'xxx小区',
    name: '张三',
    houseNumber: '兰一',
    phone: '1886666666'
  });

  await Address.create({
    username: 'zhangsan',
    city: '杭州',
    department: 'xxx小区',
    name: '张三',
    houseNumber: '兰二',
    phone: '1887777777'
  });


  // 获取地址列表
  // const addressList = await Address.find({ username: 'zhangsan' }).sort({ createdAt: 1 });
  // console.log(addressList);

  // 获取单个地址
  // const id = '631d8ed33fcd798f0b96b3d7';
  // const address = await Address.findById(id);
  // console.log(address);

  // 修改单个地址
  // const id = '631d8ed33fcd798f0b96b3d7';
  // const newAddress = await Address.findOneAndUpdate(
  //   { _id: id, username: 'zhangsan' },
  //   {
  //     username: 'zhangsanA',
  //     city: '上海',
  //     department: '汤臣一品',
  //     houseNumber: '兰一A栋',
  //     name: '张三A',
  //     phone: '8888888888'
  //   },
  //   {
  //     new: true
  //   }
  // )
  // console.log(newAddress);
})()