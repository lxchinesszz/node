var middle=require('express');
var router=middle.Router();

//定义执行这个方法时候的中间件
router.use(function timelog(req,res,next){
    console.log('Time:',Date.now());
    next();
});

router.get('/',function (req,res) {
    res.send('Birds home page');
})

// 定义 about 页面的路由
router.get('/about', function(req, res) {
    res.send('About birds');
});

module.exports=router;