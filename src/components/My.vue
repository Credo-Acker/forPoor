<template>
    <div class="my">
        <header-index :index="6" v-on:getLoginRequest="getLoginRequest"></header-index>
        <img src="../assets/myBanner.png" class="banner">
        <div class="main">
            <div class="main-top">
                <img :src="src" class="headimg">
                <p class="nickname">
                    昵称：{{username}}
                </p>
                <p class="phone">
                    联系电话：17287845760
                </p>
                <p class="du">
                    信誉度：<img src="../assets/star2.png"><img src="../assets/star2.png"><img src="../assets/star2.png"><img src="../assets/star2.png">
                </p>
                <button class="set"></button>
                <ul class="mine">
                    <li>
                        <p>69</p>
                        <p>关注</p>
                    </li>
                    <li>
                        <p>5</p>
                        <p>项目</p>
                    </li>
                    <li>
                        <p>5</p>
                        <p>收藏</p>
                    </li>
                    <li>
                        <p>10</p>
                        <p>标记</p>
                    </li>
                    <input type="text" placeholder="搜索我的项目" class="search"><button class="gosearch"></button>
                </ul>
            </div>
            <div class="items">
                <ul class="items-ul">
                    <li class="items-li" v-for="(item, index) in projects" :key="index">
                        <div class="items-div">
                            <p class="name">
                                项目名：<span>{{item.name}}</span>
                            </p>
                            <p class="place">
                                收购商所在地：{{item.place}}
                            </p>
                            <p class="time">
                                {{item.time}}
                            </p>
                            <img class="items-img" v-for="(imgItem, imgIndex) in item.imgs" :src="imgItem" :key="imgIndex">
                            <p class="liulan">
                                已浏览{{item.times}}次
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cover" :class="{none: isCover}">

        </div>
        <div class="loginAlert" :class="{none: isCover}">
            <div class="login-title">
                <img src="../assets/reallogo.png"><img src="../assets/kaifa.png">
            </div>
            <div class="third">
                <div class="fenge">

                </div>
                <div class="fenge-title">
                    第三方账号注册官网
                </div>
                <div class="fenge">

                </div>
            </div>
            <div class="third-content">
                <a href="#"><img src="../assets/qq.png" class="toguanwang"></a>
                <a href="#"><img src="../assets/wx.png" class="toguanwang"></a>
                <a href="#"><img src="../assets/wb.png" class="toguanwang"></a>
            </div>
            <div class="denglu">
                <div class="fenge">

                </div>
                <div class="denglu-title">
                    使用账号登录
                </div>
                <div class="fenge">

                </div>
            </div>
            <div class="denglu-content">
                <input type="text" id="nickname" placeholder="输入昵称" v-model="username">
                <input type="password" id="password" placeholder="输入密码" v-model="password">
                <button class="submit" @click="login()">登录</button>
            </div>
            <div class="denglu-bottom">
                <a href="#">忘记密码<img src="../assets/right.png"></a>
                还没有账号？<router-link to="/register">点击注册<img src="../assets/right2.png"></router-link>
            </div>
        </div>
        <div class="user" :class="{none: !logining}">
            <div class="user-main">
                <span class="user_name">{{user_name}}</span>
                <span class="logout" @click="logout()">退出</span>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    name: 'My',
    data () {
        return {
            username: "",
            password: "",
            projects: [
                {
                    name: "重庆特色小镇开发投资商",
                    place: "重庆市",
                    time: "2018年5月3日",
                    imgs: [require('../assets/xiaozhen1.png'), require('../assets/xiaozhen2.png')],
                    times: 25621
                },
                {
                    name: "农特产柚子投资商",
                    place: "广州省",
                    time: "2018年5月8日",
                    imgs: [require('../assets/juzi.png')],
                    times: 4622
                },
                {
                    name: "安徽旅游开发提供商",
                    place: "安徽省",
                    time: "2018年6月8日",
                    imgs: [require('../assets/anhui1.png'), require('../assets/anhui2.png')],
                    times: 15621
                },
                {
                    name: "湖南农家乐提供商",
                    place: "湖南省",
                    time: "2018年6月23日",
                    imgs: [require('../assets/hunan1.png'), require('../assets/hunan2.png')],
                    times: 12458
                }
            ],
            src: "",
            username: "",
            user_name: "",
            logining: false,
            url: "http://gm.credog.top/app",
            isCover: true
        }
    },
    created() {
        if (window.localStorage.getItem('username') == "") {
            alert("您未登录");
            this.$router.push({
                name: 'Index'
            });
        } else {
            this.src = window.localStorage.getItem('src');
            this.username = window.localStorage.getItem('username');
            this.$http.post(this.url + "/forPoor/session")
                .then((response) => {
                    console.log(response);
                    if (response.data.status == "false") {
                        window.localStorage.setItem('src', "");
                        window.localStorage.setItem('username', "");
                        alert("您未登录");
                        this.$router.push({
                            name: 'Index'
                        });
                        this.logining = false;
                    } else if (response.data.status == "ok") {
                        this.src = window.localStorage.getItem('src');
                        this.username = window.localStorage.getItem('username');
                        this.logining = true;
                    }
                })
        }
        if (window.localStorage.getItem('username')) {
            this.user_name = window.localStorage.getItem('username');
            this.logining = true;
        }
    },
    mounted() {

    },
    beforeDestroy() {
    },
    methods: {
        logout: function () {
            this.$http.post(this.url + "/forPoor/logout")
                .then((response) => {
                    console.log(response);
                    if (response.data.status == "ok") {
                        window.localStorage.setItem('src', "");
                        window.localStorage.setItem('username', "");
                        this.logining = false;
                    }
                });
        },
        getLoginRequest: function () {
            this.isCover = false;
        },
        login: function () {
            let params = {
                username: this.username,
                password: this.password,
            };
            this.$http.post(this.url + "/forPoor/login", qs.stringify(params), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
                .then((response) => {
                    console.log(response);
                    if (response.data.status == "ok") {
                        this.isCover = true;
                        this.logining = true;
                        this.user_name = response.data.username;
                        window.localStorage.setItem('src', response.data.headImg);
                        window.localStorage.setItem('username', response.data.username);
                    } else if (response.data.status == "false") {
                        alert("密码错误");
                    } else if (response.data.status == "no") {
                        alert("账户不存在");
                    } else if (response.data.status == "logined") {
                        alert("请不要重复登录");
                    }
                });
        }
    }
}
</script>

<style scoped>
.my {
    position: relative;
}

.banner {
    width: 100%;
    height: 126px;
}

.main {
    position: relative;
    margin: 0 auto;
    background: #f7f7f7;
    padding-top: 90px;
}

.main-top {
    position: relative;
    max-width: 1010px;
    min-width: 1010px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    box-shadow: 0px 0px 10px #cccccc;
    margin: 0 auto;
    color: #666666;
    font-size: 14px;
}

.headimg {
    position: absolute;
    top: -80px;
    width: 235px;
    height: 235px;
    border-radius: 235px;
    box-shadow: 0px 0px 20px #97cbe7;
}

.nickname,.phone,.du {
    position: relative;
    display: block;
    width: 200px;
    line-height: 28px;
    left: 260px;
    top: 10px;
}

.du {
    display: flex;
    align-items: flex-start;
}

.set {
    background: url(../assets/shezhi.png);
    background-size: 100% 100%;
    width: 47px;
    height: 41px;
    border: 1px solid #eeeeee;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 15px;
}

.mine {
    position: relative;
    background: #f7f7f7;
    display: inline-block;
    left: 10px;
    top: 5px;
    margin-top: 100px;
    width: 990px;
    border: 1px solid #eeeeee;
}

.mine li {
    float: left;
    height: 50px;
    border-right: 1px solid #eeeeee;
    width: 105px;
    cursor: pointer;
}

.mine li:hover {
    background: #fbd437;
    color: #ffffff;
}

.mine li p {
    display: block;
    text-align: center;
    width: 105px;
}

.mine li p:first-child {
    margin-top: 6px;
}

.search {
    position: absolute;
    margin-top: 10px;
    right: 5px;
    width: 230px;
    height: 28px;
    border: 1px solid #eeeeee;
    color: #999999;
    padding-left: 5px;
    font-size: 12px;
}

.gosearch {
    position: absolute;
    margin-top: 13px;
    width: 23px;
    height: 23px;
    background: #f7f7f7;
    border: 1px solid #eeeeee;
    right: 10px;
}

.items {
    position: relative;
    width: 100%;
}

.items-ul {
    position: relative;
    display: inline-block;
    width: 100%;
}

.items-li {
    position: relative;
    width: 100%;
    margin-top: 30px;
    border-bottom: 10px solid #ffffff;
}

.items-div {
    position: relative;
    max-width: 850px;
    min-width: 800px;
    width: 920px;
    padding: 30px 80px 30px 80px;
    border: 1px solid #eeeeee;
    background: #ffffff;
    color: #666666;
    font-size: 13px;
    margin: 0 auto;
    margin-bottom: 30px;
}

.name {
    position: relative;
    line-height: 22px;
}

.name span {
    color: #e5080d;
}

.place {
    position: relative;
    line-height: 22px;
}

.time {
    position: relative;
    line-height: 22px;
}

.items-img {
    display: inline-block;
    margin-top: 15px;
    width: 199px;
    height: 149px;
    margin-right: 10px;
}

.liulan {
    position: absolute;
    right: 50px;
    border-bottom: 10px;
}

.cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 98;
    opacity: 0.4;
    background: #cccccc;
}

.loginAlert {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -280px;
    margin-left: -365px;
    z-index: 99;
    background: #ffffff;
    width: 730px;
    height: 560px;
}

.login-title {
    position: relative;
    display: flex;
    height: 95px;
    justify-content: center;
    align-items: center;
}

.login-title img:first-child {
    width: 55px;
    height: 55px;
    margin-right: 10px;
}

.login-title img:last-child {
    width: 205px;
    height: 32px;
}

.third {
    position: relative;
    height: 30px;
    width: 430px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fenge {
    width: 125px;
    height: 3px;
    background: #e9e9e9;
}

.fenge-title {
    width: 210px;
    color: #999999;
    line-height: 30px;
    text-align: center;
}

.third-content {
    position: relative;
    margin: 0 auto;
    width: 240px;
    margin-top: 10px;
}

.toguanwang {
    width: 60px;
    height: 60px;
    margin-left: 8px;
    margin-right: 8px;
}

.denglu {
    position: relative;
    height: 30px;
    width: 430px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.denglu-title {
    width: 210px;
    color: #999999;
    line-height: 30px;
    text-align: center;
}

.denglu-content {
    width: 325px;
    position: relative;
    margin: 0 auto;
    margin-top: 20px;
}

#nickname,#password {
    width: 298px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #e7e7e7;
    padding: 0 10px;
    color: #666666;
    margin-bottom: 23px;
}

.submit {
    width: 318px;
    height: 38px;
    line-height: 38px;
    color: #ffffff;
    font-size: 18px;
    border: 1px solid #e7e7e7;
    background: #fbd437;
    cursor: pointer;
}

.denglu-bottom {
    position: relative;
    margin: 0 auto;
    margin-top: 30px;
    width: 325px;
    font-size: 14px;
    color: #999999;
}

.denglu-bottom a {
    display: inline-block;
    color: #999999;
}

.denglu-bottom a:first-child {
    margin-right: 100px;
}

.denglu-bottom a:first-child img {
    display: inline-block;
    position: relative;
    left: 1px;
}

.denglu-bottom a:last-child {
    color: #0024a8;
}

.denglu-bottom a:last-child img {
    display: inline-block;
    position: relative;
    top: 1px;
}

.user {
    position: absolute;
    width: 100%;
    right: 10px;
    top: 0;
}

.user-main {
    position: relative;
    height: 30px;
    max-width: 1010px;
    min-width: 1010px;
    text-align: right;
    margin: 0 auto;
    z-index: 20;
}

.user_name {
    position: relative;
    display: inline-block;
    top: 0;
    left: 8px;
    height: 29px;
    line-height: 29px;
    font-size: 12px;
    color: #666666;
    width: 180px;
    text-align: right;
    margin-right: 5px;
    background: #ffffff;
}

.logout {
    position: relative;
    display: inline-block;
    height: 29px;
    left: 6px;
    line-height: 30px;
    font-size: 12px;
    width: 30px;
    color: #666666;
    background: #ffffff;
    cursor: pointer;
}

.logout:hover {
    color: #fbd437;
}

.none {
    display: none;
}
</style>
