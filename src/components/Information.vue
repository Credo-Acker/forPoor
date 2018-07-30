<template>
    <div class="information">
        <header-index :index="4"></header-index>
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
        <footer-index></footer-index>
    </div>
</template>

<script>
export default {
    name: 'Information',
    data () {
        return {
            imgs: [require('../assets/lunbo1.png'), require('../assets/lunbo5.png')]
        }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {
    },
    methods: {

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
</style>
