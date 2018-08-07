<template>
    <div class="information">
        <header-index :index="4" v-on:getLoginRequest="getLoginRequest"></header-index>
        <vue-swiper v-if="imgs" :Imgs="imgs" :Interval="30"></vue-swiper>
        <div class="main">
            <div class="main-top">
                <div class="top">
                    <img src="../assets/bighot.png" class="bighot"><span>热门</span>
                    <img src="../assets/xia.png" class="xia">
                </div>
            </div>
            <div class="items">
                <div class="items-ul">
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg1.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">柚子投资人（农家特色香甜红心柚子投资商）</span></p>
                                    <p class="time">2018年5月3日<span class="realtime">09:35</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$14512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                此柚子香甜可口，大家值得投资。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/youzi.png" class="img">
                                <img src="../assets/youzi2.png" class="img">
                                <img src="../assets/youzi3.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg2.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">旅游开发人（农家旅游投资商）</span></p>
                                    <p class="time">2018年6月4日<span class="realtime">16:13</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$21512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                在这里可以感受到大自然的气息，一定可以成为很好的旅游市场。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/shanshui3.png" class="img">
                                <img src="../assets/shanshui.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg3.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">菠萝产地（菠萝提供商）</span></p>
                                    <p class="time">2018年6月10日<span class="realtime">15:42</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$13000</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                这里的菠萝比市场上的菠萝都要好吃。希望有老板投资可以扩大产量。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/boluo.png" class="img">
                                <img src="../assets/boluo2.png" class="img">
                                <img src="../assets/boluo3.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg4.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">鸡鸭提供户（农家鸡鸭提供商）</span></p>
                                    <p class="time">2018年6月16日<span class="realtime">12:03</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$15142</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                农家鸡鸭，吃的放心。希望有老板可以投资做大市场。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/gou8.jpg" class="img">
                                <img src="../assets/shanshui2.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg5.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">药人（中药提供商）</span></p>
                                    <p class="time">2018年6月25日<span class="realtime">11:48</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$20512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                现在中药的需求量大幅度提高，如有老板投资，必有更大的市场。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/gou9.jpg" class="img">
                                <img src="../assets/youshan2.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg6.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">茶商（茶品提供商）</span></p>
                                    <p class="time">2018年7月3日<span class="realtime">16:42</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$34512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                现在茶的需求量大幅度提高，如有老板投资，必有更大的市场。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/gancha2.png" class="img">
                                <img src="../assets/gancha3.png" class="img">
                            </div>
                            <span class="liulan">已浏览2332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg7.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">四季果园投资（四季果园投资商）</span></p>
                                    <p class="time">2018年7月8日<span class="realtime">17:42</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$32100</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                一年四季都可以吃到水果，快来品尝我的四季果园。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/yingtao2.png" class="img">
                                <img src="../assets/yingtao3.png" class="img">
                                <img src="../assets/yingtao.png" class="img">
                            </div>
                            <span class="liulan">已浏览12232次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg8.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">海鲜投资（海鲜投资商）</span></p>
                                    <p class="time">2018年7月13日<span class="realtime">23:56</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$44512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                山东的海鲜值得你们的投资。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/yucun2.png" class="img">
                                <img src="../assets/yucun3.png" class="img">
                                <img src="../assets/yucun.png" class="img">
                            </div>
                            <span class="liulan">已浏览8332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg9.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">农家乐开发（农家乐投资商）</span></p>
                                    <p class="time">2018年7月18日<span class="realtime">08:22</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$87512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                开发农村旅游，建设农家乐提高旅游质量。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/nongjiale3.png" class="img">
                                <img src="../assets/nongjiale.png" class="img">
                                <img src="../assets/nongjiale2.png" class="img">
                            </div>
                            <span class="liulan">已浏览6332次</span>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img src="../assets/headimg10.png" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">特色小吃（特色小吃投资商）</span></p>
                                    <p class="time">2018年7月23日<span class="realtime">22:10</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <p class="yingli">可盈利：<span class="realyingli">$93512</span></p>
                                    <p class="rending">认定情况：<span class="realrending">值得投资</span></p>
                                    <button class="guanzhu">关注</button>
                                    <button class="jinru">进入</button>
                                </div>
                            </div>
                            <div class="items-content">
                                随着消费水平的提高，大家对于吃有更多的兴趣，投资特色小吃也是一种价值投资。
                            </div>
                            <div class="items-imgs">
                                <img src="../assets/xiaochi.jpg" class="img">
                                <img src="../assets/xiaochi2.jpg" class="img">
                                <img src="../assets/xiaochi3.jpg" class="img">
                            </div>
                            <span class="liulan">已浏览36332次</span>
                        </div>
                    </li>
                </div>
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
    name: 'Information',
    data () {
        return {
            username: "",
            password: "",
            imgs: [require('../assets/lunbo1.png'), require('../assets/lunbo5.png')],
            user_name: "",
            logining: false,
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
.information {
    position: relative;
    width: 100%;
}

.main {
    position: relative;
    width: 100%;
    background: #f7f7f7;
    padding-top: 40px;
}

.main-top {
    height: 55px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
}

.top {
    position: relative;
    display: flex;
    align-items: center;
    max-width: 1010px;
    min-width: 1010px;
}

.top span {
    display: inline-block;
    line-height: 55px;
    font-size: 26px;
    color: #333333;
    margin-left: 10px;
}

.xia {
    position: absolute;
    right: 0;
}

.items {
    position: relative;
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
    max-width: 920px;
    min-width: 920px;
    width: 920px;
    padding: 20px 40px 10px 40px;
    border: 1px solid #eeeeee;
    background: #ffffff;
    box-shadow: 0px 0px 10px #cccccc;
    color: #666666;
    font-size: 14px;
    margin: 0 auto;
    margin-bottom: 30px;
}

.items-top {
    position: relative;
    display: flex;
    align-items: flex-start;
    height: 60px;
    margin-bottom: 10px;
}

.items-topleft {
    display: inline-block;
    width: 600px;
}

.headimg {
    display: inline-block;
    width: 55px;
    height: 55px;
    border-radius: 55px;
    float: left;
}

.shangjia {
    position: absolute;
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
}

.time {
    position: absolute;
    display: inline-block;
    font-size: 12px;
    margin-top: 37px;
    margin-left: 10px;
}

.realtime {
    display: inline-block;
    margin-left: 10px;
}

.realshangjia {
    color: #e40c07;
}

.laizi {
    position: absolute;
    display: inline-block;
    font-size: 12px;
    margin-top: 37px;
    margin-left: 210px;

}

.items-topright {
    position: relative;
    display: inline-block;
    width: 280px;
    height: 60px;
}

.yingli {
    position: absolute;
    display: inline-block;
    margin-top: 10px;
}

.realyingli {
    color: #d43c33;
}

.rending {
    position: absolute;
    display: inline-block;
    margin-top: 30px;
}

.realrending {
    color: #285eae;
}

.guanzhu,.jinru {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 65px;
    height: 55px;
    margin-right: -4px;
    background: #f7f7f7;
    border: 1px solid #eeeeee;
    left: 160px;
    top: -5px;
}

.jinru:hover,.guanzhu:hover {
    color: #ffffff;
    background: #fbd437;
}

.items-content {
    line-height: 26px;
    margin-bottom: 20px;
}

.items-imgs img {
    display: inline-block;
    width: 199px;
    height: 149px;
    margin-right: 10px;
}

.liulan {
    position: relative;
    display: inline-block;
    left: 800px;
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
    left: 10px;
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
    left: 10px;
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
