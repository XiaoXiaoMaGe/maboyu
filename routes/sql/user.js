module.exports = {
    login:"select count(*) as count from user where phone=? and password=?",
    register:"insert into user values(?,?)"
}