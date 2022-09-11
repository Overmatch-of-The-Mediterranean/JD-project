# 数据模型属性设计
列举各个数据模型的示例，写明属性

## 用户
```js
{
  _id: 'xxx',
  username: '186455555',
  password: 'xxx'
}
```

## 地址
```js
{
  _id: 'xxx',
  username: '186455555',  // 和用户产生关联
  city: 'beijing',
  department: 'xxx小区',
  name: 'xxx',
  houseNumber: 'xxx',
  phone: 'xxx'  // 与用户的可能不一样  
}
```

## 商店
```js
{
  _id: 'xxx',
  name: '沃尔玛',
  imgUrl: 'xxx.png',
  sales: 1000,
  expressLimit: 0,
  expressPrice: ￥5,
  slogan: 'VIP尊享 xxx'
}
```

## 商品
```js
{
  _id: 'xxx',
  shopId: 'xxx', // 和商店的_id对应
  imgUrl: 'xxx.png',
  name: '番茄',
  sales: 10,
  price: 33.6,
  oldPrice: 30.6,
  tabs: ['all','seckill'] // 根据种类选择商品
}
```

## 订单 （待定）