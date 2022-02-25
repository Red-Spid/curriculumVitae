import { request } from './request.js'
import { requestPost } from './request.js'

export function defaultRequest(){
    axios.get('https://red-spid.github.io/resources/jsonUrl/index.json')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
}


export function getaxios(){
    return request({
        url:"/ajax/json_demo.json"
    })
}

// 获取京东轮播
export function getHomeBanner() {
    return request({
        url: "/vuedemo/banner"
    })
}
// 获取京喜轮播
export function getjxBanner() {
    return request({
        url: "/vuedemo/jx-banner",
        params: {
            ip: "zhang"
        }
    })
}
// 获取京东功能视图,有一个参数判断,1在京东主页显示 0在全部页面中才显示
export function getHomeFeature(a) {
    return request({
        url: "/vuedemo/jd_feature",
        params: {//get请求数据时,用params请求数据
            show: a
        }
    })
}
// 获取京喜功能导航,有一个参数判断,1在京喜主页显示 0在全部页面中才显示
export function getjxFeature(a) {
    return request({
        url: "/vuedemo/jx_feature",
        params: {
            show: a
        }
    })
}
// 获取京东的底部导航
export function getJdTabBar() {
    return request({
        url: "/vuedemo/jd_tabbar"
    })
}
// 获取京喜底部导航
export function getJxTabBar() {
    return request({
        url: "/vuedemo/jx_tabbar"
    })
}
// 获取京东一级分类数据
export function getJdCategoryOne() {
    return request({
        url: "/vuedemo/get_jd_category_one"
    })
}
// 获取京东二级分类数据
export function getJdCategoryTwo() {
    return request({
        url: "/vuedemo/get_jd_category_two"
    })
}
// 获取京东三级分类数据
export function getJdCategoryThree() {
    return request({
        url: "/vuedemo/get_jd_category_three"
    })
}
// 根据京东一级分类查二级,根据二级查三级 取到三维数组
export function getJdCategoryMax(page) {
    // 根据传递过来的页码取数据,默认取出50条
    return request({
        url: "/vuedemo/get_jd_category_max",
        params: {
            page: page,//页数
        }
    })
}
// 用户注册
export function Register(data) {
    return requestPost({
        url: "/vuedemo/register",
        data
    })
}
// 获取国际区号
export function getMobilePrefix() {
    return request({
        url: "/vuedemo/get_mobile_prefix",
    })
}
// 获取手机验证码
export function getCodeImg(params) {
    return request({
        url: "/vuedemo/get_code_img",
        params
    })
}
// 用户登录
export function login(data) {
    return requestPost({
        url: "/vuedemo/land",
        data
    })
}
// 自动登录
export function autoCode(code) {
    return requestPost({
        url: "/vuedemo/autoland",
        data: {
            autocode: code
        }
    })
}
// 用于搜索商品,关键字查数据等
export function getGoods(data) {
    return request({
        url: "/vuedemo/get_goods",
        params: { ...data }
    })
}
// 用于详情页面 根据商品id请求出商品的数据 已经商品数据以及发布商品的店铺信息
export function getGoodsDet(id) {
    return request({
        url: "/vuedemo/get_goodsDet",
        params: {
            goods_id: id
        }
    })
}
// 获取购物车数据
export function postShopCart(uid) {
    return requestPost({
        url: "/vuedemo/get_shopcart",
        data: {//post请求数据的时候,提交数据用data
            user_id: uid
        }
    })
}
// 修改购物车数据
export function updateShopcart(data) {
    return requestPost({
        url: '/vuedemo/update_shopcart',
        data
    })
}
// 删除购物车数据
export function deleteShopcart() {
    return request({
        url: "/vuedemo/delete_shopcart"
    })
}
// 生成订单
export function createOrder(data) {
    return requestPost({
        url: "/vuedemo/creat_order",
        data
    })
}
// 获取该用户的所有订单
export function getOrder(data) {
    return requestPost({
        url: "/vuedemo/get_order",
        // 一个必须键user_id 一个不必须state订单状态 1---待支付 2---支付成功 3---支付失败
        data
    })
}
// 获取订单内商品信息
export function getOrderGoods(id) {
    return requestPost({
        url: "/vuedemo/get_goods_inorder",
        data: {
            order_id: id
        }
    })
}
// 修改订单状态
export function updateOrderState(data) {
    return requestPost({
        url: "/vuedemo/update_order_state",
        // 有两个参数 一个订单编号 一个订单状态
        data
    })
}
// 取消订单
export function cancelOrder(id) {
    return requestPost({
        url: "/vuedemo/cancel_order",
        // 只有状态为1的订单才可以取消
        data: {
            order_id: id
        }
    })
}
// 删除订单
export function deleteOrder(id) {
    return requestPost({
        url: "/vuedemo/cancel_order",
        // 只有状态为2,3的订单才可以删除,删除订单时改订单及相关数据都要完全删除
        data: {
            order_id: id
        }
    })
}
// 获取关联商品
export function getGoodsRelation() {
    return request({
        url: "/vuedemo/get_goods_relation"
    })
}
// 获取商品规格
export function getNorms() {
    return request({
        url: "/vuedemo/get_norms"
    })
}
// 定义goods类
export class goods {
    constructor(goodsData, norms, relationGoods) {
        // 把你要用的字段都进行取值赋值
        this.goodsdata = goodsData
        this.norms = norms
        this.relationGoods = relationGoods
    }
}
// 获取省
export function getProvinces() {
    return request({
        url: "/vuedemo/get_provinces"
    })
}
// 获取市
export function getCities(id) {
    return request({
        url: "/vuedemo/get_cities",
        params: {
            provinceid: id
        }
    })
}
// 获取区
export function getAreas(id) {
    return request({
        url: "/vuedemo/get_areas",
        params: {
            cityid: id
        }
    })
}
// 新增地址
export function creatUserAddress(params) {
    return request({
        url: "/vuedemo/creat_user_address",
        params
    })
}
// 修改地址内容
export function updateUserAddress(params) {
    return request({
        url: "/vuedemo/update_user_address",
        params
    })
}
// 获取所有地址
export function getUserAddress(id) {
    return request({
        url: "/vuedemo/get_user_address",
        params: {
            user_id: id
        }
    })
}
// 修改此地址为默认地址
export function updateUserAddressDef(params) {
    return request({
        url: "/vuedemo/update_user_address_def",
        params
    })
}
//删除地址
export function deleteUserAaddress(params) {
    console.log(params)
    return request({
        url: '/vuedemo/delete_user_address',
        params
    })
}
//修改收藏店铺数据
export function upDataUserInfo(data) {
    return requestPost({
        url: '/vuedemo/update_userdet',
        data
    })
}