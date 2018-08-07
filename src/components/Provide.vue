<template>
    <div class="provide">
        <header-index :index="2" v-on:getLoginRequest="getLoginRequest"></header-index>
        <img src="../assets/provideBanner.png" class="banner">
        <div class="main">
            <div class="items">
                <ul class="items-ul">
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/youzi.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：重庆长寿纯天然健康柚子提供商
                                </p>
                                <p class="diyu">
                                    产品生产地域：重庆市
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/boluo.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：云南特色无眼菠萝农家批发提供商
                                </p>
                                <p class="diyu">
                                    产品生产地域：云南
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gancha.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：重庆永川清香秀芽种植基地提供商
                                </p>
                                <p class="diyu">
                                    产品生产地域：重庆市
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/nongjiale.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：云南避暑一条龙服务清凉一夏农家乐
                                </p>
                                <p class="diyu">
                                    产品生产地域：云南
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/yingtao.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：重庆璧山樱桃谷自摘兼贩卖有机樱桃提供商
                                </p>
                                <p class="diyu">
                                    产品生产地域：重庆市
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/jingdian.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：成都网红街头旅游景点
                                </p>
                                <p class="diyu">
                                    产品生产地域：四川
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/shanshui.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：湖南山水之乡农村特色农家乐
                                </p>
                                <p class="diyu">
                                    产品生产地域：湖南
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/yucun.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：山东大规模全手工海鲜打捞渔村
                                </p>
                                <p class="diyu">
                                    产品生产地域：山东
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/dongbei.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：东北舒适大炕农家乐
                                </p>
                                <p class="diyu">
                                    产品生产地域：东北
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/youshan.png" class="items-img">
                            <div class="items-des">
                                <p class="shangjia">
                                    商家：四川农村有山有水旅游开发景点
                                </p>
                                <p class="diyu">
                                    产品生产地域：四川
                                </p>
                                <p class="haoping">
                                    好评度：<img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star"><img src="../assets/star.png" class="star">
                                </p>
                                <button class="xiangqing">了解详情</button>
                            </div>
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
    name: 'Provide',
    data () {
        return {
            username: "",
            password: "",
            logining: false,
            user_name: "",
            url: "http://backforpoor.credog.top",
            isCover: true
        }
    },
    created() {
        if (window.localStorage.getItem('username')) {
            this.user_name = window.localStorage.getItem('username');
            this.logining = true;
        }
        this.$http.post(this.url + "/forPoor/session")
            .then((response) => {
                console.log(response);
                if (response.data.status == "false") {
                    window.localStorage.setItem('src', "");
                    window.localStorage.setItem('username', "");
                    // this.$store.commit('writeSrc', {data: ""});
                    // this.$store.commit('writeUsername', {data: ""});
                    this.logining = false;
                } else if (response.data.status == "ok") {
                    this.logining = true;
                }
            })
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
                        this.$store.commit('writeSrc', {data: ""});
                        this.$store.commit('writeUsername', {data: ""});
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
                        // this.$store.commit('writeSrc', {data: response.data.headImg});
                        // this.$store.commit('writeUsername', {data: response.data.username});
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
.provide {
    position: relative;
}

.banner {
    width: 100%;
    height: 126px;
}

.main {
    position: relative;
    min-width: 1010px;
    max-width: 1010px;
    margin: 0 auto;
    padding-top: 40px;
}

.items-ul {
    position: relative;
    display: inline-block;
}

.items-li {
    float: left;
    width: 490px;
    height: 170px;
    margin: 10px 5px;
}

.items-div {
    position: relative;
    width: 472px;
    display: flex;
    align-items: flex-start;
}

.items-img {
    display: inline-block;
    width: 126px;
    height: 116px;
    border: 7px solid #fff2be;
}

.items-des {
    display: inline-block;
    background: #f7f7f7;
    border: 1px solid #e4e4e4;
    font-size: 14px;
    color: #666666;
    width: 300px;
    padding: 10px;
}

.shangjia,.diyu,.haoping {
    margin-bottom: 9px;
}

.haoping {
    display: flex;
    align-items: center;
}

.xiangqing {
    display: block;
    cursor: pointer;
    width: 80px;
    height: 27px;
    color: #666666;
    margin-left: 200px;
    border: 1px solid #e4e4e4;
    background: #ffffff;
}

.items-div:hover .items-img {
    border: 7px solid #fbd437;
}

.items-div:hover .items-des {
    padding: 20px 25px;
    box-shadow: 0px 0px 10px #cccccc;
}

.items-div:hover .xiangqing {
    background: #fbd437;
    color: #ffffff;
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
