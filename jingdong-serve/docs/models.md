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
```js
{
  _id:'xxx',
  shopId: '店铺id',
  shopName:'沃尔玛',
  isCancel: false,    // 是否取消订单
  addressId: {   // 复制关系
    "username": "zhangsanA",
    "city": "上海",
    "department": "汤臣一品",
    "name": "张三A",
    "houseNumber": "兰一A栋",
    "phone": "8888888888",
  },
  products:[
  {
    product: {  // 复制关系
      "shopId": "631d9b697b9a3de66b38f357",
      "imgUrl": "/images/product/grape.jpg",
      "name": "葡萄",
      "sales": 100,
      "price": 33,
      "oldPrice": 36,
      "tabs": ["all","seckill","fruit"]
    },
    count:5
  },
  {
   
  }
  ]
}
```