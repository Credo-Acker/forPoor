<template>
    <div class="index">
        <header-index :index="1"></header-index>
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
            <div class="xiangqing">
                <div class="title">
                    <div class="title-main">
                        <span class="title-img2"></span><span class="title-title">注册详情</span>
                    </div>
                </div>
                <div class="title-shadow"></div>
                <div class="xiangqing-main">

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
                                成都网红街头旅游景点
                            </li>
                            <li>
                                <div class="number2">

                                </div>
                                山东大规模全手工海鲜打捞渔村
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
                            <!-- <li>
                                <div class="number">

                                </div>
                            </li> -->
                        </ul>
                    </div>
                    <div class="video">
                        <ul class="video-ul">
                            <li>
                                <div class="video-div">
                                    <img src="../assets/pin1.png">
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
                                    <img src="../assets/pin2.png">
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
                                    <img src="../assets/pin3.png">
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
                                    <img src="../assets/pin4.png">
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
                                    <img src="../assets/pin5.png">
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
                                    <img src="../assets/pin6.png">
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
    </div>
</template>

<script>

export default {
    name: 'Index',
    data () {
        return {
            imgs: [require('../assets/lunbo7.png'), require('../assets/lunbo6.png'), require('../assets/lunbo8.png')]
        }
    },
    created() {

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

.xiangqing {
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

/* 注册详情 */


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
    margin-left: 10px;
}

.number2 {
    width: 15px;
    height: 20px;
    background: url(../assets/yin.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 10px;
}

.number3 {
    width: 15px;
    height: 20px;
    background: url(../assets/tong.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 10px;
}

.number {
    width: 15px;
    height: 20px;
    background: url(../assets/tong.png);
    background-size: 100% 100%;
    margin-right: 4px;
    margin-left: 10px;
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
</style>
