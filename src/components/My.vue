<template>
    <div class="my">
        <header-index :index="6"></header-index>
        <img src="../assets/myBanner.png" class="banner">
        <div class="main">
            <div class="main-top">
                <img src="../assets/headimg9.png" class="headimg">
                <p class="nickname">
                    昵称：易家产品收购
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
        <footer-index></footer-index>
    </div>
</template>

<script>
export default {
    name: 'My',
    data () {
        return {
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
            ]
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
</style>
