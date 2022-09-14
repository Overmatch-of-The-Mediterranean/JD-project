class ErrorModel {
  constructor(errno = -1, message = '注册错误') {
    this.errno = errno;
    this.message = message;
  }
}
module.exports = ErrorModel;