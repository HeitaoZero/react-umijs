export default {
    "GET /users": { name: "Dexter", age: 18 },

    "POST /users/login": (req, res) => {
        console.log(req.body)
        if (req.body.username !== "Dexter" || req.body.password !== "Dexter123") {
            res.send({
                code: 401,
                message: "用户名或密码错误"
            })
            return
        }
        res.send({
            code: 200,
            message: "登录成功",
            data: {
                token: "1234567890"
            }
        })
    }
}