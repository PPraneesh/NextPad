const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    let Btoken = req.headers.authorization;
    // console.log(Btoken)
    if(Btoken === undefined){
        return res.status(401).send({ message: "Unauthorized access" });
    }

    let token = Btoken.split(' ')[1];
    try{
        let decodedtoken = jwt.verify(token, "abcdef")
        // console.log('token', decodedtoken)
        next()
    } 
    catch(err){
        console.log('err', err)   
    }
}

module.exports = verifyToken;
