<template>
    <div class="report">
        <header-index :index="5" v-on:getLoginRequest="getLoginRequest"></header-index>
        <vue-swiper v-if="imgs" :Imgs="imgs" :Interval="30"></vue-swiper>
        <div class="main">
            <div class="main-top">
                <div class="top">
                    <span>最新</span>
                    <img src="../assets/xia.png" class="xia">
                </div>
            </div>
            <div class="items">
                <ul class="items-ul">
                    <li class="items-li" v-if="reports" v-for="(item, index) in reports" :key="index">
                        <div class="items-div">
                            <div class="items-top">
                                <div class="items-topleft">
                                    <img v-if="item.headimg" :src="item.headimg" class="headimg">
                                    <p class="shangjia">发布人：<span class="realshangjia">{{item.people}}</span></p>
                                    <p class="time">{{item.time}}<span class="realtime">09:35</span></p>
                                    <p class="laizi">来自 本网站</p>
                                </div>
                                <div class="items-topright">
                                    <span class="liulan">已浏览{{item.times}}次</span>
                                </div>
                            </div>
                            <div class="items-content">
                                {{item.content}}
                            </div>
                            <div class="items-imgs">
                                <img v-for="(imgItem, index) in item.imgs" :src="imgItem" :key="index" class="img">
                            </div>
                            <span class="shenhe">此篇文章经过审核</span>
                            <button class="look">点击查看</button>
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
    name: 'Report',
    data () {
        return {
            username: "",
            password: "",
            imgs: [require('../assets/lunbo2.png'), require('../assets/lunbo4.png')],
            reports: [
                {
                    headimg: require('../assets/headimg1.png'),
                    people: "扶贫记者团日报：一首成都街头带动一带旅游",
                    content: "2018年1月，随着“在成都的街头走一走”流入大街小巷，也吸引了众多没有见识过成都街头风采的人们选择到成都街头旅游，成都街头在1月13日寒假期间人满为患，但依然不减游人们对成都街头的热情与喜爱。",
                    time: "2018年1月13日",
                    times: 5443,
                    imgs: [require("../assets/jingdian.png"), require("../assets/jingdian2.png"), require("../assets/jingdian3.png")]
                },
                {
                    headimg: require('../assets/headimg2.png'),
                    people: "友人村日报：震惊，东北大炕农家乐带动当地旅游？",
                    content: "2018年3月21日据东北区一个友人村当地农家乐采访游人显示，游人们大多是为了体验一把睡东北大炕的感受，而在放假期间选择远赴东北旅游，只为在东北睡几晚炕头。导致，睡东北炕头风靡一时，成为一大时尚。",
                    time: "2018年3月21日",
                    times: 1000,
                    imgs: [require("../assets/dongbei.png"), require("../assets/dongbei2.png"), require("../assets/dongbei3.png")]
                },
                {
                    headimg: require('../assets/headimg6.png'),
                    people: "山东渔村日报：渔民笑开颜，海鲜有人接手了",
                    content: "2018年5月30日山东渔村渔农笑开了颜，根据该渔民的描述我们知道，该渔民世世代代在海边出海打捞海鲜，且整个村子都靠出海为生，但是没有收购商收购他们的海鲜导致囤积的海鲜卖不出去，而最近该渔村与以山东海鲜收购方合作，达成协议，收购该渔村所有海鲜，渔民们从中尝到了以海养家的甜头，预计未来该渔村渔民的收入可观。",
                    time: "2018年5月30日",
                    times: 3423,
                    imgs: [require("../assets/yucun.png"), require("../assets/yucun2.png"), require("../assets/yucun3.png")]
                },
                {
                    headimg: require('../assets/headimg4.png'),
                    people: "重庆璧山日报：樱桃谷的收获季节，付出终于有回报",
                    content: "2018年4月21日重庆一樱桃谷迎来了大量游客，游客们手提樱桃谷提供的篮子，上山手动采集樱桃，品尝刚从树上采集下来的樱桃，一时间给重庆樱桃谷带来了大量的收入，该樱桃谷一年的对樱桃谷的维护得到了令人满意的回报。",
                    time: "2018年4月21日",
                    times: 6423,
                    imgs: [require("../assets/yingtao.png"), require("../assets/yingtao2.png"), require("../assets/yingtao3.png")]
                },
                {
                    headimg: require('../assets/headimg6.png'),
                    people: "重庆长寿日报：秋收柚子找到收购方了",
                    content: "2017年10月，随着长寿柚子的大量成熟长寿农村的农民们纷纷收获了大量的柚子产品，今年与往年的不同在于，今年的柚子之乡终于找到对口的柚子收购方了，再也不用担心一年之计的辛劳落地成泥呵护柚子树了。",
                    time: "2017年10月20日",
                    times: 6423,
                    imgs: [require("../assets/youzi.png"), require("../assets/youzi2.png"), require("../assets/youzi3.png")]
                },
                {
                    headimg: require('../assets/headimg7.png'),
                    people: "四川扶贫记者团日报",
                    content: "2018年5月12日，时隔汶川大地震10年，当年破碎的四川已经重建了起来，在四川一个有山有水的农村，在今日，与一山水旅游开发商达成协议，在当地进行旅游开发建设，预计将带动四川农村经济快速发展，让我们拭目以待吧！",
                    time: "2018年5月12日",
                    times: 4423,
                    imgs: [require("../assets/youshan.png"), require("../assets/youshan2.png"), require("../assets/youshan3.png")]
                },
                {
                    headimg: require('../assets/headimg10.png'),
                    people: "云南特产日报：无眼菠萝将要大面积走入市场了",
                    content: "2018年4月12日，相信大家有听说过云南十八怪，今天想要介绍的是时尚之省的云南无眼菠萝，云南的无眼菠萝是由几个农村联手大面积种植的，产量巨大，味道香甜，今日，云南的好事临近，云南无眼菠萝找到了无眼菠萝的收购方，且签订长期合同，未来的我们将会尝到无眼菠萝的鲜美了。",
                    time: "2018年4月12日",
                    times: 1923,
                    imgs: [require("../assets/boluo.png"), require("../assets/boluo2.png"), require("../assets/boluo3.png")]
                },
                {
                    headimg: require('../assets/headimg8.png'),
                    people: "云南清凉一夏日报：夏日炎炎，云南避暑村迎来爆满游人",
                    content: "2018年7月23日，随着夏日的炎热撒向大地，云南一由农村开发而来的农家避暑区迎来了一年来游人高峰期，一时间人满为患，客房爆满，避暑区的建设村名喜笑颜开，为了给到来的游人们提供满意的服务而努力，同时，也通过一年至热之时带动当地经济发展。",
                    time: "2018年7月23日",
                    times: 7923,
                    imgs: [require("../assets/nongjiale.png"), require("../assets/nongjiale2.png"), require("../assets/nongjiale3.png")]
                },
                {
                    headimg: require('../assets/headimg9.png'),
                    people: "湖南水乡日报：三伏天，湖南农家乐忙得也热火朝天",
                    content: "2018年6月，随着高考的结束与暑假的临近，湖南的水乡之地迎来了大量的游客在当地享受清凉服务。为农家乐的主办方带来不小的收入。",
                    time: "2018年6月20日",
                    times: 8923,
                    imgs: [require("../assets/shanshui.png"), require("../assets/shanshui2.png"), require("../assets/shanshui3.png")]
                },
                {
                    headimg: require('../assets/headimg3.png'),
                    people: "陕西北头村日报：震惊，大热天羊肉泡馍如此畅销",
                    content: "2018年7月2日，陕西北头村以农村旅游景点的羊肉泡馍脱销了，原因竟然是因为暑假来临，大量游客听闻陕西羊肉泡馍独具一格，游客不顾夏天炎热，大量涌入陕西北头村只为尝一尝陕西羊肉泡馍的滋味，导致羊肉泡馍店脱销，无羊肉泡馍可买。",
                    time: "2018年7月2日",
                    times: 12923,
                    imgs: [require("../assets/gou6.jpg"), require("../assets/paomo.jpg"), require("../assets/paomo2.jpg")]
                }
            ],
            url: "http://gm.credog.top/app",
            user_name: "",
            logining: false,
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
.report {
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
    width: 100%;
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
    max-width: 800px;
    min-width: 800px;
    width: 920px;
    padding: 20px 100px 20px 100px;
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
    width: 700px;
}

.headimg {
    display: inline-block;
    width: 55px;
    height: 55px;
    border-radius: 55px;
    float: left;
    border: 1px solid #aaaaaa;
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
    width: 100px;
    height: 60px;
}

.items-content {
    line-height: 26px;
    font-size: 24px;
    margin-bottom: 20px;
    line-height: 30px;
}

.items-imgs img {
    display: inline-block;
    width: 199px;
    height: 149px;
    margin-right: 10px;
}

.liulan {
    position: absolute;
    right: 0;
    top: 10px;
    display: inline-block;
    font-size: 12px;
}

.shenhe {
    font-size: 12px;
    color: #999999;
}

.look {
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 120px;
    height: 52px;
    background: #f7f7f7;
    color: #666666;
    font-size: 18px;
    border: 1px solid #eeeeee;
    left: 580px;
    top: -5px;
}

.look:hover {
    color: #ffffff;
    background: #fbd437;
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
