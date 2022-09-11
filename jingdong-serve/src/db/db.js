const { on } = require('koa');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017'
const dbName = 'testdb'
mongoose.connect(`${url}/${dbName}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
const db = mongoose.connection
db.on('error', err => {
  console.log('连接失败', err);
})
module.exports = mongoose;