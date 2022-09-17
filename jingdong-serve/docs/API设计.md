# API（接口）设计

## 注册

### url
`/api/user/register`

### method
`post`

### request body
```js
{
  telphone: '888888888',
  password: '123456'
}
```

### response body
```js
{
  errno: 0,
  message: 'errno！==0，返回错误信息'
}
```



## 登录

### url
`/api/user/login`

### method
`post`

### request body
```js
{
  telphone: '888888888',
  password: '123456'
}
```

### response body
```js
{
  errno: 0,
  message: 'errno！==0，返回错误信息'
}
```



## 获取用户信息

### url

`/api/user/info`

### method

`get`

### request body

无

### response body
```js
{
  errno:0,
  data: {
    username:'xxx',
    message:'errno！==0，返回错误信息'
  }
}
```




## 创建收货地址

### url
`/api/user/address`

### method
`post`

### request body
```js
{
  city: 'xxx',
  department: 'xx小区',
  houseNumber: 'xxx',
  name: 'xxx',
  phone: 'xxx'
}
```

### response body  也可以只返回id
```js
{
  errno: 0,
  data:{
    _id: '收获地址的id'
    city: 'xxx',
    department: 'xx小区',
    houseNumber: 'xxx',
    name: 'xxx',
    phone: 'xxx'
  }
  message: 'errno！==0，返回错误信息'
}
```



## 获取收货地址列表

### url
`/api/user/address`

### method
`get`

### request body
无

### response body
```js
errno: 0,
  data:[{
    _id: '收获地址的id'
    city: 'xxx',
    department: 'xx小区',
    houseNumber: 'xxx',
    name: 'xxx',
    phone: 'xxx'
  }]
  message: 'errno！==0，返回错误信息'
```



## 获取单个收货地址

### url
`/api/user/address/:id`   (`:id 是动态参数，服务端可以获取具体的动态参数`)

### method
`get`

### request body
无

### response body
```js
{
  errno: 0,
  data:{
    _id: '收获地址的id',
    city: 'xxx',
    department: 'xx小区',
    houseNumber: 'xxx',
    name: 'xxx',
    phone: 'xxx'
  }
  message: 'errno！==0，返回错误信息'
}
```



## 更新收货地址

### url
`/api/user/address/:id`

### method
`patch`

### request body
```js
{
  city: 'xxx',
  department: 'xx小区',
  houseNumber: 'xxx',
  name: 'xxx',
  phone: 'xxx'
}
```

### response body
```js
{
  errno: 0,
  message: 'errno!==0,返回错误信息'
}
```




## 附近店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### response body
```js
{
  errno: 0,
  data: [{
    _id: '商铺id',
    name: '沃尔玛',
    imgUrl: 'xxx',
    sales: 10000,
    expressLimit: 0, //最低起送价格
    expressPrice: ￥5,  // 运费
    slogan: 'VIP尊享 满xxx减xxx'
  }]
  message:'errno!==0时错误信息'
}
```




## 获取具体某个店铺

### url

`/api/shop/:id`

### method

`get`

### request body

无

### response body
```js
{
  errno: 0,
  data: [{
    _id: '商铺id',
    name: '沃尔玛',
    imgUrl: 'xxx',
    sales: 10000,
    expressLimit: 0, //最低起送价格
    expressPrice: ￥5,  // 运费
    slogan: 'VIP尊享 满xxx减xxx'
  }]
  message:'errno!==0时错误信息'
}
```



## 获取具体某个店铺的商品列表

### url

`/api/shop/:id/products`

### query

`tab=all`

举例：`/api/shop/10/products?tab=all`

### method

`get`

### request body

无

### response body
```js
{
  errno: 0,
  data: [{
    name: '番茄250g/份',
    imgUrl: 'xxx',
    sales: 10000,
    price: 'xxx',
    oldPrice: 'xxx',
  }]
  message:'errno!==0时错误信息'
}
```



## 创建订单

### url

`/api/order`

### method

`post`

### request body
```js
{
  addressId: '收获地址id', // 复制关系
  shopId: '店铺id',
  shopName:'沃尔玛',
  isCancel: false,    // 是否取消订单
  products:[{   //复制关系
    _id: '商品id',
    count:5
  },
  {
    _id: '商品id',
    count:2
  }]
}
```

### response body
```js
{
  errno: 0,
  data: {
    _id: '订单的id'
  }
  message: 'errno!==0时的错误信息'
}
```



## 获取订单列表

### url

`/api/order/list`

### method

``
get
### request body

无

### response body
```js
{
  errno: 0,
  data:{
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
  }
  }
}
```
——————————————————————————————————————————————————————————

## 标题

### url

### method

### request body
```js

```

### response body
```js

```