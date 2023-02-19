    const router=require('express').Router()
    const userCtrl =require('../controllers/userCtrl')
    const auth = require('../middleware/auth')

    router.post('/register',userCtrl.register)
    router.post('/login',userCtrl.login)
    router.get('/UserProfile',auth,userCtrl.getUserProfile)
    router.get('/nombre',userCtrl.getNumberOfUsers)
    router.post('/add',userCtrl.addFeedback)
    router.get('/showfeed',userCtrl.showFeedbacks)
    router.put('/updatefeedback', userCtrl.updateFeedback);
    router.post('/deletefeedback', userCtrl.deleteFeedback);
    router.get('/showall',userCtrl.showall)
    router.post('/like', userCtrl.addLike);
    router.post('/addDislike', userCtrl.addDislike);
    router.get('/numberfeed',userCtrl.getNumberOfFeedbacks)
    router.get('/showname',userCtrl.showName)
    router.post('/deluser',userCtrl.deleteUser)


    module.exports=router