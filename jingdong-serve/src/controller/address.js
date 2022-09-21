const Address = require('../models/Address');


/**
 * 创建地址
 * @param {String} username 用户名
 * @param {Object} data 地址详情信息
 */
async function addressCreate(username, data) {
  const { city, department, houseNumber, name, phone } = data
  if (city !== '' && department !== '' && houseNumber !== '' && name !== '' && phone !== '') {
    const newAddress = await Address.create({
      username,
      ...data
    })
    return newAddress
  }
}


/**
 * 获取地址列表
 * @param {String} username 用户名
 */
async function getAddressList(username) {
  const addressList = await Address.find({ username }).sort({ updatedAt: -1 });
  return addressList;
}


/**
 * 获取单个地址
 * @param {String} id 
 */
async function getAddressById(id) {
  const idAddress = await Address.findById(id).sort({ updatedAt: -1 });
  return idAddress;
}

/**
 * 更新收获地址
 * @param {String} id 要修改地址的id
 * @param {String} username 用户名
 * @param {Object} data 地址详情信息
 */
async function updateAddress(id, username, data) {
  const address = await Address.findOneAndUpdate(
    { _id: id, username },
    { username, ...data },
    { new: true }
  )
  return address
}

module.exports = {
  addressCreate,
  getAddressList,
  getAddressById,
  updateAddress
}