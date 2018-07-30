<template>
    <div class="buy">
        <header-index :index="3"></header-index>
        <img src="../assets/buyBanner.png" class="banner">
        <div class="main">
            <div class="items">
                <ul class="items-ul">
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou1.jpg" class="items-img">
                            <p class="shangjia">
                                商家：农特产柚子投资商
                            </p>
                            <p class="dizhi">
                                收购地址：广州省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou2.jpg" class="items-img">
                            <p class="shangjia">
                                商家：安微农家旅游开发投资商
                            </p>
                            <p class="dizhi">
                                收购地址：安微省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou3.jpg" class="items-img">
                            <p class="shangjia">
                                商家：湖南农家乐投资方商
                            </p>
                            <p class="dizhi">
                                收购地址：湖南省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou4.jpg" class="items-img">
                            <p class="shangjia">
                                商家：云南茶品投资商
                            </p>
                            <p class="dizhi">
                                收购地址：云南省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou5.jpg" class="items-img">
                            <p class="shangjia">
                                商家：重庆特色小镇开发投资商
                            </p>
                            <p class="dizhi">
                                收购地址：重庆市
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou6.jpg" class="items-img">
                            <p class="shangjia">
                                商家：陕西特色小吃投资商
                            </p>
                            <p class="dizhi">
                                收购地址：陕西省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou7.jpg" class="items-img">
                            <p class="shangjia">
                                商家：山东海鲜投资商
                            </p>
                            <p class="dizhi">
                                收购地址：山东省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou8.jpg" class="items-img">
                            <p class="shangjia">
                                商家：贵州鸡鸭基地投资商
                            </p>
                            <p class="dizhi">
                                收购地址：贵州省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou9.jpg" class="items-img">
                            <p class="shangjia">
                                商家：陕西药材投资商
                            </p>
                            <p class="dizhi">
                                收购地址：陕西省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                    <li class="items-li">
                        <div class="items-div">
                            <img src="../assets/gou10.jpg" class="items-img">
                            <p class="shangjia">
                                商家：河北四季果园投资商
                            </p>
                            <p class="dizhi">
                                收购地址：河北省
                            </p>
                            <p class="lianxi">
                                联系商家：18822234539
                            </p>
                            <button class="xiangqing">详情</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <footer-index></footer-index>
    </div>
</template>

<script>
export default {
    name: 'Buy',
    data () {
        return {

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
.provide {
    position: relative;
}

.banner {
    width: 100%;
    height: 126px;
}

.main {
    position: relative;
    max-width: 1010px;
    min-width: 1010px;
    margin: 0 auto;
}

.items {
    position: relative;
}

.items-ul {
    position: relative;
    display: inline-block;
}

.items-li {
    display: flex;
    margin: 20px 5px;
    width: 326px;
    height: 350px;
    float: left;
    align-items: center;
    justify-content: center;
}

.items-div {
    width: 275px;
    height: 295px;
    padding: 10px;
    background: #f7f7f7;
    border: 1px solid #eeeeee;
}

.items-img {
    display: block;
    width: 275px;
    height: 155px;
}

.shangjia,.dizhi,.lianxi {
    font-size: 14px;
    color: #666666;
    margin-top: 5px;
    margin-bottom: 8px;
}

.xiangqing {
    display: block;
    cursor: pointer;
    width: 103px;
    height: 36px;
    color: #666666;
    margin-left: 165px;
    border: 1px solid #e4e4e4;
    background: #ffffff;
}

.items-div:hover {
    padding: 18px 12px;
    width: 285px;
    box-shadow: 0px 0px 8px #cccccc;
}

.items-div:hover .items-img{
    position: relative;
    width: 285px;
    height: 165px;
    top: -5px;
}

.items-div:hover .xiangqing{
    background: #fbd437;
    color: #ffffff;
    box-shadow: 0px 0px 5px #dddddd;
}
</style>
