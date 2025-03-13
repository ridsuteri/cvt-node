function sampleMiddleware(req, res, next){
    console.log('I am a sample middleware, i was just checking the requests, it looks okay, you can go ahead now')
    next()
}

module.exports = sampleMiddleware;