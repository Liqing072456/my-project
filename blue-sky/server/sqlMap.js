var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(name,age,message) values(?,?,?)'
  }
}

module.exports = sqlMap;