const jwt = require('jsonwebtoken')
const isLoggedIn = async (req, res, next)=>{
    try{
    const token = req.headers['authorization']
    // console.log(req.headers);
    if(token){
        let decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if(decoded){
            req.user = decoded
            next();
        }
        else{
            res.status(403).send('invalid/expired token')
        }
    }
    else{
        res.status(403).send('please pass a valid token')
    }
} catch(err){
    res.status(500).send('error verifying token')
}
}

module.exports = isLoggedIn