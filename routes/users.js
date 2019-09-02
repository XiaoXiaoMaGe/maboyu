var express = require('express');
var router = express.Router();

const db = require("./connection/connect")
const sql = require("./sql/user")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    let phone = req.body.phone;
    let password = req.body.password;
    if(!phone || !/^[a-zA-Z0-9_]{6,16}$/.test(password)){
        res.send({
            status:1,
            mes:"参数错误"
        })
    }else if(!/^1[0-9]{10}$/.test(phone)){
        res.send({
            status:1,
            mes:"手机号验证失败"
        })
    }else{
        db.query(sql.login,[phone,password],function (err,result) {
            if(!err) {
                let data = JSON.parse(JSON.stringify(result[0]))
                if (data.count > 0) {
                    res.send({
                        status: 0,
                        mes: "登录成功"
                    })
                    return
                }
            }
            res.send({
                status: 1,
                mes: "账号或密码错误"
            })
        })
    }
});

router.post('/register', function(req, res, next) {
    let phone = req.body.phone;
    let password = req.body.password;
    if(!phone || !/^[a-zA-Z0-9_]{6,16}$/.test(password)){
        res.send({
            status:1,
            mes:"参数错误"
        })
    } else if(!/^1[0-9]{10}$/.test(phone)){
        res.send({
            status:1,
            mes:"手机号验证失败"
        })
    }else{
        db.query(sql.register,[phone,password],function (err,result) {
            if(!err){
                let data = JSON.parse(JSON.stringify(result))
                if(data.affectedRows>0){
                    res.send({
                        status:0,
                        mes:"注册成功"
                    })
                }
                return
            }
            res.send({
                status:1,
                mes:"注册失败"
            })
        })
    }
})

module.exports = router;
