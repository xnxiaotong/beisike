// 这个axios是系统的axios
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
// 自己定义的用户
import { UsersData } from './data/userInfo'
let mock = new MockAdapter(axios);
// 引入storejs 根据内存做判断
import Store from "storejs"
mock.onGet('/login').reply(config => {
    // console.log(config.params) //里面有传过来的参数
    // 做一个数据效验
    var data = {
        code: 200,
        msg: ''
    };
    var userlist = Store.get("userlist") || UsersData;

    userlist.forEach(ele => {
        if (ele.username == config.params.username && ele.password == config.params.password) {
            data.msg = "登陆成功";
            data.code = 1;
            data.userinfo = ele;
        } else if (ele.username == config.params.username || ele.password == config.params.password) {
            data.msg = "登陆失败,用户名或密码错误";
            data.code = -1;
        } else {
            data.msg = "用户名不存在";
            data.code = 0;
        }
    })
    return [200, data];

});
var userinfo=UsersData;
mock.onGet('/reg').reply(config => {
    console.log(userinfo);
    var data = { code: 0, msg: "", data: {} };
    var info = config.params;
    for (var i = 0; i < userinfo.length; i++) {
        if (userinfo[i].username == info.username) {
            data.msg = "用户名已经存在";
            data.data.code = 0;
            return [200, data];
        } else if (info.username && info.password && info.name) {
            data.msg = "注册成功";
            data.data.code = 1;
            info.avatar = 'https://avatars0.githubusercontent.com/u/22588905?v=4&s=120',
            userinfo.push(info);
            return [200, data];
        } else {
            data.data.code = -1;
            data.msg = "请把信息填写完整";
            return [200, data];
        }
    }
    return [200, data];
})

export default axios;	//注意暴露axios