
export const ApiRoot: 'http://153.3.219.11:18188/wafa';

export default {
    // 用户
    User: {
        // 登录
        Login: '/loginCtrl/login',
        //注册
        register: '/loginCtrl/register',
        // 验证码
        StrCode: '/loginCtrl/verifyCode',
    },
    Person: {
        //获取用户信息
        personalcenter: '/ctrl/userCtrl/readUserInfo',
    },
    //编辑用户信息
    Userinfo: {
        editUserInfo: '/ctrl/userCtrl/editUserInfo',
        addAuthInfo: '/ctrl/userCtrl/addAuthInfo',
        editPassword: '/ctrl/userCtrl/editPassword'
    },
    OrgInfo: {
        addOrgInfo: '/ctrl/orgCtrl/addOrg',
        GetOrgInfo: '/ctrl/orgCtrl/getOrgInfo'
    },
    //印章列表
    Seal: {
        //列表
        List: '/ctrl/eseal/listEseal',
        //设为默认
        SetDefault: '/ctrl/eseal/setDefault',
        //删除
        Delete: 'ctrl/eseal/delEseal'
    },

    Eseal: {
        Add: 'ctrl/eseal/addEseal',
        // 获取印章
        GetEseal: 'ctrl/eseal/listActivedEseal',
        GetQRCode: '/api/eseal/getQRCode'
    },
    //上传合同
    Erecord: {
        Upload: 'ctrl/erecord/uploadErecord',
        Add: 'ctrl/erecord/addErecord',
        GetErecord: 'ctrl/erecord/getErecord',
        Sign: 'ctrl/erecord/signErecord',
        Verify: 'ctrl/erecord/verifyErecord',
        //待我签
        SignNews: 'ctrl/erecord/countErecord',
        //最新消息
        // recentNews: '',
        ListErecord: 'ctrl/erecord/listErecord',
        //合同验签
        SignInfo: 'api/erecord/getErecordSignInfo'
    },
    // 联系人
    Contact: {
        List: 'ctrl/contactCtrl/list',

    },
    // 手写签名
    SignHandWriting: {
        Upload: 'api/eseal/addEseal',
        isUpload: 'api/eseal/isUpload'
    },
    // 手写签章
    HangSign: {
        getQRCode: 'api/erecord/getQRCode',
        isUpload: 'api/erecord/isUpload'

    },
    Term: {
        Add: 'ctrl/tsCtrl/add'
    },
    //最新消息
    News: {
        getNews: 'ctrl/msgCtrl/getMessage',
        Delect: 'ctrl/msgCtrl/deleteMsg',
        Detial: 'ctrl/msgCtrl/getMsgDetail',
        IsRead: 'ctrl/msgCtrl/markMsgIsRead'
    },
    //套餐详情
    Order: {
        // 获取个人套餐使用信息
        getSelfProduct: 'ctrl/productCtrl/getSelfProduct',
        //获取所有套餐信息
        listProduct: 'ctrl/productCtrl/listProduct',
        //提交购买申请
        buyProduct: 'ctrl/productCtrl/buyProduct',
        //获取所有订单信息
        listOrder: 'ctrl/orderCtrl/listOrder',
        //通过支付宝付款
        alipay: 'ctrl/productCtrl/alipay'
    }
}
