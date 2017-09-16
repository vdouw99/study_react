/**
 * Created by sf on 2017/9/16.
 */

var koa = require('koa');
var app = new koa();
var router = require('koa-router')();
var koaBody = require('koa-body')();

// test1
router.get('/', function *(next) {
    this.body = 'hello koa!';
});

// test2
router.get('/api', function *(next) {
    this.body = 'test data';
});

// 首页 超值特惠
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    console.log('----mock/home/ad.js-----');
    console.log(this.params);
    this.body = homeAdData;
});

// 首页 猜你喜欢
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    console.log(this.params);
    this.body = homeListData;
});

// 搜索结果页 三个参数
var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log(this.params);
    this.body = searchListData;
});

// 搜索结果页 两个参数
var searchListData2 = require('./search/list2.js');
router.get('/api/search/:page/:city/:category', function *(next) {
    console.log(this.params);
    this.body = searchListData2;
});

// 详情页 商户信息
const detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', function *(next) {
    console.log(this.params);
    this.body = detailInfo
});

// 详情页 用户评论
const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log(this.params);
    this.body = detailComment
});

// 订单列表
const orderList = require('./orderlist/orderList.js');
router.get('/api/orderlist/:username', function *(next) {
    console.log(this.params);
    this.body = orderList;
});

// 提交评论
router.post('/api/submitComment', function *(next) {
// router.post('/api/submitComment',koaBody, function *(next) {
    this.body = {errno: 0, msg: 'ok'};
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(9527);