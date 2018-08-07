<template>
    <div class="index">
        <header-index :index="1" v-on:getLoginRequest="getLoginRequest"></header-index>
        <vue-swiper v-if="imgs" :Imgs="imgs" :Interval="30"></vue-swiper>
        <div class="main">
            <div class="tuijian">
                <div class="title">
                    <div class="title-main">
                        <span class="title-img1"></span><span class="title-title">特别推荐</span>
                    </div>
                </div>
                <div class="title-shadow"></div>
                <div class="tuijian-main">
                    <ul>
                        <li class="tuijian-li">
                            <div class="tuijian-div" @mouseover="tuijianh(0)" @mouseout="tuijian(0)">
                                <img src="../assets/dongbei.png" class="tuijian-img">
                                <div class="tuijian-des">
                                    东北舒适大炕农家乐
                                </div>
                            </div>
                        </li>
                        <li class="tuijian-li">
                            <div class="tuijian-div" @mouseover="tuijianh(1)" @mouseout="tuijian(1)">
                                <img src="../assets/yingtao.png" class="tuijian-img">
                                <div class="tuijian-des">
                                    重庆璧山樱桃谷自摘兼贩卖有机樱桃提供商
                                </div>
                            </div>
                        </li>
                        <li class="tuijian-li">
                            <div class="tuijian-div" @mouseover="tuijianh(2)" @mouseout="tuijian(2)">
                                <img src="../assets/shanshui3.png" class="tuijian-img">
                                <div class="tuijian-des">
                                    湖南山水之乡农村特色农家乐
                                </div>
                            </div>
                        </li>
                        <li class="tuijian-li">
                            <div class="tuijian-div" @mouseover="tuijianh(3)" @mouseout="tuijian(3)">
                                <img src="../assets/youshan4.png" class="tuijian-img">
                                <div class="tuijian-des">
                                    四川农村有山有水旅游开发景点
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="xuanchuan">
                <div class="title">
                    <div class="title-main">
                        <span class="title-img3"></span><span class="title-title">产品宣传</span>
                    </div>
                </div>
                <div class="title-shadow">

                </div>
                <div class="xuanchuan-main">
                    <div class="hottui">
                        <ul class="hottui-ul">
                            <li class="hottui-title">
                                <img src="../assets/retui.png">热推榜
                            </li>
                            <li>
                                <div class="number1">
                                </div>
                                成都网红街头旅游<br>景点
                            </li>
                            <li>
                                <div class="number2">

                                </div>
                                山东大规模全手工<br>海鲜打捞渔村
                            </li>
                            <li>
                                <div class="number3">
                                </div>
                                云南特色无眼菠萝
                            </li>
                            <li>
                                <div class="number">
                                </div>
                                陕西经典农村纯味羊肉泡馍
                            </li>
                            <li>
                                <div class="number">
                                </div>
                                云南避暑一条龙服务清凉一夏农家乐
                            </li>
                        </ul>
                    </div>
                    <div class="video">
                        <ul class="video-ul">
                            <li>
                                <div class="video-div">
                                    <a href="http://www.iqiyi.com/v_19rrhuamo4.html?vfm=m_303_qqll"><img src="../assets/pin1.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        26:01
                                    </div>
                                    <p class="videoname">
                                        财经频道的产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览521次
                                    </p>
                                    <p class="days">
                                        2天前
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="video-div">
                                    <a href="http://www.iqiyi.com/w_19rtnje3n9.html"><img src="../assets/pin2.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        02:30
                                    </div>
                                    <p class="videoname">
                                        地方报纸的产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览56次
                                    </p>
                                    <p class="days">
                                        10天前
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="video-div">
                                    <a href="https://v.youku.com/v_show/id_XMzc1MTA3MTk3Mg==.html?fromvsogou=1"><img src="../assets/pin3.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        05:31
                                    </div>
                                    <p class="videoname">
                                        新闻或其他途径的产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览345次
                                    </p>
                                    <p class="days">
                                        8天前
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="video-div">
                                    <a href="https://v.youku.com/v_show/id_XNzEyMjUwNjU2.html?fromvsogou=1"><img src="../assets/pin4.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        05:30
                                    </div>
                                    <p class="videoname">
                                        产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览345次
                                    </p>
                                    <p class="days">
                                        8天前
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="video-div">
                                    <a href="https://v.youku.com/v_show/id_XMzEwNzMyODA0OA==.html?fromvsogou=1"><img src="../assets/pin5.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        03:49
                                    </div>
                                    <p class="videoname">
                                        产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览345次
                                    </p>
                                    <p class="days">
                                        8天前
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div class="video-div">
                                    <a href="https://v.youku.com/v_show/id_XMjg4MTUyMzUyMA==.html?spm=a2h0j.11185381.listitem_page1.5!4~A"><img src="../assets/pin6.png"></a>
                                    <div class="shiping">

                                    </div>
                                    <div class="shijian">
                                        07:22
                                    </div>
                                    <p class="videoname">
                                        产品宣传视频
                                    </p>
                                    <p class="liulan">
                                        已经浏览345次
                                    </p>
                                    <p class="days">
                                        8天前
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="to-top" @click="scrollTop()">

        </div>
        <footer-index></footer-index>
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
    </div>
</template>

<script>
import qs from 'qs';
export default {
    name: 'Index',
    data () {
        return {
            username: "",
            password: "",
            imgs: [require('../assets/lunbo7.png'), require('../assets/lunbo6.png'), require('../assets/lunbo8.png')],
            isCover: true,
            logining: false,
            user_name: "",
            url: "http://backforpoor.credog.top"
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
        tuijianh: function (num) {
            let tuijianDiv = document.querySelectorAll('.tuijian-div');
            let tuijianImg = document.querySelectorAll('.tuijian-img');
            let tuijianDes = document.querySelectorAll('.tuijian-des');
            for (let i = 0; i < tuijianDiv.length; i++) {
                if (i != num) {
                    tuijianDiv[i].className = "tuijian-div";
                } else {
                    tuijianDiv[i].className = "tuijian-div tuijian-divh";
                }
            }
            for (let i = 0; i < tuijianImg.length; i++) {
                if (i != num) {
                    tuijianImg[i].className = "tuijian-img";
                } else {
                    tuijianImg[i].className = "tuijian-img tuijian-imgh";
                }
            }
            for (let i = 0; i < tuijianDes.length; i++) {
                if (i != num) {
                    tuijianDes[i].className = "tuijian-des";
                } else {
                    tuijianDes[i].className = "tuijian-des tuijian-desh";
                }
            }
        },
        tuijian: function (num) {
            let tuijianDiv = document.querySelectorAll('.tuijian-div');
            let tuijianImg = document.querySelectorAll('.tuijian-img');
            let tuijianDes = document.querySelectorAll('.tuijian-des');
            for (let i = 0; i < tuijianDiv.length; i++) {
                tuijianDiv[i].className = "tuijian-div";
            }
            for (let i = 0; i < tuijianImg.length; i++) {
                tuijianImg[i].className = "tuijian-img";
            }
            for (let i = 0; i < tuijianDes.length; i++) {
                tuijianDes[i].className = "tuijian-des";
            }
        },
        scrollTop: function () {
            window.scrollTo(0,0);
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
        },
        logout: function () {
            this.$http.post(this.url + "/forPoor/logout")
                .then((response) => {
                    console.log(response);
                    if (response.data.status == "ok") {
                        // this.$store.commit('writeSrc', {data: ""});
                        // this.$store.commit('writeUsername', {data: ""});
                        window.localStorage.setItem('src', "");
                        window.localStorage.setItem('username', "");
                        this.logining = false;
                    }
                });
        }
    }
}
</script>

<style scoped>
.index {
    position: relative;
}

.main {
    position: relative;
}

.tuijian {
    position: relative;
    margin-top: 45px;
}

.xuanchuan {
    position: relative;
    margin-top: 45px;
}

.title {
    position: relative;
    display: flex;
    justify-content: center;
    height: 120px;
    background: #f7f7f7;
}

.title-main {
    display: flex;
    align-items: center;
    max-width: 1010px;
    min-width: 1010px;
}

.title-shadow {
    position: relative;
    margin: 0 auto;
    background: url(../assets/shadow.png);
    width: 990px;
    height: 17px;
    background-size: 100% 100%;
}

.title-img1 {
    position: relative;
    display: inline-block;
    width: 33px;
    height: 45px;
    background: url(../assets/tuijian.png);
    background-size: 100% 100%;
}

.title-img2 {
    position: relative;
    display: inline-block;
    width: 34px;
    height: 37px;
    background: url(../assets/zhuce.png);
    background-size: 100% 100%;
}

.title-img3 {
    position: relative;
    display: inline-block;
    width: 37px;
    height: 35px;
    background: url(../assets/xuanchuan.png);
    background-size: 100% 100%;
}

.title-title {
    display: inline-block;
    margin-left: 25px;
    font-size: 26px;
    color: #333333;
}

/* 特别推荐 */
.tuijian-main {
    position: relative;
    padding-top: 40px;
    min-width: 1010px;
    max-width: 1010px;
    margin: 0 auto;
}

.tuijian-main ul {
    position: relative;
    display: inline-block;
}

.tuijian-li {
    display: flex;
    justify-content: center;
    align-items: center;
    float: left;
    height: 360px;
    margin-left: 10px;
    margin-right: 10px;
}

.tuijian-div {
    background: #f9f9f9;
    border: 1px solid #ebe9e9;
    width: 190px;
    height: 285px;
    padding: 10px 10px 0 10px;
    cursor: pointer;
}

.tuijian-divh {
    width: 240px;
    padding: 15px 15px 0 15px;
    height: 330px;
    box-shadow: 0px 0px 15px #aaa;
}

.tuijian-img {
    position: relative;
    display: block;
    width: 185px;
    height: 206px;
    margin: 0 auto;
}

.tuijian-imgh {
    position: relative;
    display: block;
    width: 235px;
    height: 245px;
    margin: 0 auto;
}

.tuijian-des {
    position: relative;
    display: flex;
    width: 210px;
    height: 80px;
    top: 0px;
    left: -10px;
    font-size: 18px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #666666;
    background: #f1e9c9;
}

.tuijian-desh {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 10px;
    left: -15px;
    width: 250px;
    height: 85px;
    background: #fbd437;
}

/* 宣传视频 */
.xuanchuan-main {
    position: relative;
    padding-top: 60px;
    width: 1010px;
    min-width: 1010px;
    max-width: 1010px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
}

.hottui {
    position: relative;
    display: inline-block;
    width: 155px;
    height: 405px;
    margin-right: 50px;
}

.hottui-ul {
    position: relative;
    display: inline-block;
    width: 155px;
    border: 1px solid #f7f7f7;
    box-shadow: 0px 0px 3px #eeeeee;
}

.hottui-ul li {
    display: flex;
    align-items: center;
}

.hottui-ul .hottui-title {
    font-size: 12px;
    color: #333333;
    line-height: 35px;
    height: 35px;
    border-bottom: 1px solid #e6e6e6;
    background: #ffffff;
}

.hottui-ul .hottui-title:hover {
    font-size: 12px;
    color: #333333;
    line-height: 35px;
    height: 35px;
    border-bottom: 1px solid #e6e6e6;
    background: #ffffff;
}

.hottui-ul .hottui-title img {
    position: relative;
    display: inline-block;
    margin-right: 4px;
    margin-left: 10px;
}

.hottui-ul li {
    position: relative;
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    background: #f7f7f7;
    font-size: 14px;
    text-align: center;
    color: #666666;
}

.hottui-ul li:hover {
    position: relative;
    height: 80px;
    border-bottom: 1px solid #e6e6e6;
    background: #ffffff;
}

.number1 {
    width: 15px;
    height: 20px;
    background: url(../assets/jin.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 8px;
}

.number2 {
    width: 15px;
    height: 20px;
    background: url(../assets/yin.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 8px;
}

.number3 {
    width: 15px;
    height: 20px;
    background: url(../assets/tong.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 8px;
}

.number {
    width: 15px;
    height: 20px;
    background: url(../assets/tong.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 8px;
    opacity: 0;
}

.video {
    position: relative;
    display: inline-block;
}

.video-ul {
    display: inline-block;
}

.video-ul li {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
}

.video-div {
    width: 200px;
    height: 160px;
    padding: 15px 15px 5px 15px;
    background: #f9f9f9;
    border: 1px solid #eeeeee;
    cursor: pointer;
}

.video-div:hover {
    width: 245px;
    height: 170px;
    box-shadow: 0px 0px 10px #dddddd;
}

.video-div img {
    width: 205px;
    height: 115px;
}

.video-div:hover img {
    width: 245px;
    height: 125px;
}

.shiping {
    width: 14px;
    height: 15px;
    background: url(../assets/shexiangji.png);
    background-size: 100% 100%;
    position: absolute;
    top: 120px;
    left: 25px;
}

.shijian {
    position: absolute;
    top: 120px;
    left: 50px;
    width: 35px;
    height: 15px;
    color: #ffffff;
    background: #adb0b4;
    font-size: 12px;
    text-align: center;
}

.videoname {
    font-size: 14px;
    color: #666666;
}

.liulan,.days {
    display: inline-block;
    font-size: 12px;
    color: #999999;
}

.to-top {
    position: absolute;
    width: 56px;
    height: 56px;
    background: url(../assets/toup.png);
    background-size: 100% 100%;
    z-index: 10;
    right: 10%;
    bottom: 250px;
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
    top: 0px;
    left: -2px;
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
    left: -4px;
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
