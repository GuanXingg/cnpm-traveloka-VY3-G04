const jwt = require("jsonwebtoken");
const accessKey = "process.env.JWT_ACCESS_KEY"
const middlewareController = {

    verifyToken:(req, res, next)=>{
        // xác thực token người đăng nhập
        const token = req.headers.token;
        
        if (token) {
          const accessToken = token.split(" ")[1];
          jwt.verify(accessToken, accessKey, (err, user) => {
            if (err) {
              res.status(403).json("Token không tồn tại!");
            }
            req.user = user;
            next();
          });
        } else {
          res.status(401).json("Bạn chưa được xác thực");
        }
      },
}
module.exports = middlewareController
 