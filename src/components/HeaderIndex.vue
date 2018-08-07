<template>
    <div class="headerIndex">
        <div class="top-bar">
            <span class="shoucang">收藏本站</span>
            <input type="search" class="search-text" placeholder="输入关键字">
            <button class="search-botton"></button>
            <span class="login" @click="openLogin">登录</span>
            <span class="shuxian"></span>
            <router-link to="/register" class="register">注册</router-link>
        </div>
        <div class="bar">
            <div class="realBar">
                <div class="bar-logo">

                </div>
                <ul class="bar-main">
                    <li class="bar-main-li" :class="{hoverli: is1}">
                        <router-link to="/index" class="item">首页</router-link>
                    </li>
                    <li class="bar-main-li" :class="{hoverli: is2}">
                        <router-link to="/provide" class="item">产品提供</router-link>
                    </li>
                    <li class="bar-main-li" :class="{hoverli: is3}">
                        <router-link to="/buy" class="item">产品收购</router-link>
                    </li>
                    <li class="bar-main-li" :class="{hoverli: is4}">
                        <router-link to="/information" class="item">信息动态</router-link>
                    </li>
                    <li class="bar-main-li" :class="{hoverli: is5}">
                        <router-link to="/report" class="item">媒体报道</router-link>
                    </li>
                    <li class="bar-main-li" :class="{hoverli: is6}">
                        <router-link to="/my" class="item">我的</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="shengfen">
            <span @click="chooseSF($event)" class="shengfen-hover">京</span>  <span @click="chooseSF($event)">沪</span>  <span @click="chooseSF($event)">津</span>  <span @click="chooseSF($event)">渝</span>  <span @click="chooseSF($event)">黑</span>  <span @click="chooseSF($event)">吉</span>  <span @click="chooseSF($event)">辽</span>  <span @click="chooseSF($event)">蒙</span>  <span @click="chooseSF($event)">冀</span>  <span @click="chooseSF($event)">新</span>  <span @click="chooseSF($event)">甘</span>  <span @click="chooseSF($event)">青</span>  <span @click="chooseSF($event)">陕</span>  <span @click="chooseSF($event)">宁</span>  <span @click="chooseSF($event)">豫</span>  <span @click="chooseSF($event)">鲁</span>  <span @click="chooseSF($event)">晋</span>  <span @click="chooseSF($event)">皖</span>  <span @click="chooseSF($event)">鄂</span>  <span @click="chooseSF($event)">湘</span>  <span @click="chooseSF($event)">苏</span>  <span @click="chooseSF($event)">川</span>  <span @click="chooseSF($event)">黔</span>  <span @click="chooseSF($event)">滇</span>  <span @click="chooseSF($event)">桂</span>  <span @click="chooseSF($event)">藏</span>  <span @click="chooseSF($event)">浙</span>  <span @click="chooseSF($event)">赣</span>  <span @click="chooseSF($event)">粤</span>  <span @click="chooseSF($event)">闽</span>  <span @click="chooseSF($event)">台</span>  <span @click="chooseSF($event)">琼</span>  <span @click="chooseSF($event)">口</span>  <span @click="chooseSF($event)">港</span>  <span @click="chooseSF($event)">澳</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderIndex',
    data () {
        return {
            is1: false,
            is2: false,
            is3: false,
            is4: false,
            is5: false,
            is6: false,
        }
    },
    props: {
        index: {
            type: Number,
            default: 0
        }
    },
    created() {
        switch (this.$props.index) {
            case 1:
                this.is1 = true;
                break;
            case 2:
                this.is2 = true;
                break;
            case 3:
                this.is3 = true;
                break;
            case 4:
                this.is4 = true;
                break;
            case 5:
                this.is5 = true;
                break;
            case 6:
                this.is6 = true;
                break;
        }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {
        openLogin: function () {
            this.$emit("getLoginRequest");
        },
        chooseSF: function (e) {
            let hover = document.querySelector('.shengfen-hover');
            hover.className = "";
            e.target.className = "shengfen-hover";
        }
    }
}
</script>

<style scoped>
.headerIndex {
    position: relative;
}

.top-bar {
    position: relative;
    max-width: 1010px;
    line-height: 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
}

.shoucang {
    display: inline-block;
    font-size: 12px;
    z-index: 30;
    cursor: pointer;
}

.search-text {
    position: relative;
    display: inline-block;
    width: 450px;
    height: 20px;
    font-size: 12px;
    padding: 0 10px;
    line-height: 20px;
    background-color: #ebeef1;
    border: none;
    color: #999999;
    margin-left: 205px;
    z-index: 30;
}

.search-botton {
    position: relative;
    display: inline-block;
    top: 0;
    width: 30px;
    height: 19px;
    background: url(../assets/search.png);
    background-size: 100% 100%;
    border: none;
    margin-left: 3px;
    z-index: 30;
}

.login {
    position: relative;
    margin-left: 209px;
    font-size: 12px;
    color: #666666;
    cursor: pointer;
}

.shuxian {
    position: relative;
    display: inline-block;
    width: 1px;
    top: 0px;
    height: 14px;
    margin: 0 6px;
    background: #666666;
}

.register {
    position: relative;
    font-size: 12px;
    color: #666666;
    cursor: pointer;
}

.login:hover,.register:hover {
    color: #fbd437;
}

.bar {
    position: relative;
    height: 54px;
    width: 100%;
    background-color: #285eae;
}

.realBar {
    position: relative;
    height: 54px;
    max-width: 1010px;
    margin: 0 auto;
}

.bar-logo {
    position: relative;
    display: inline-block;
    width: 243px;
    height: 100%;
    background: url(../assets/biglogo.png);
    background-size: 100% 100%;
}

.bar-main {
    position: relative;
    display: inline-block;
    margin-left: 90px;
    height: 54px;
}

.bar-main-li {
    float: left;
    cursor: pointer;
    font-size: 16px;
    line-height: 54px;
    width: 110px;
    text-align: center;
    border-right: 1px solid #1e4a8b;
}

.item {
    display: inline-block;
    height: 54px;
    width: 110px;
}

.hoverli {
    background: #1e4a8b;
}

.bar-main li:nth-child(1) {
    border-left: 1px solid #1e4a8b;
}

.bar-main li a {
    color: #ffffff;
}

.shengfen {
    position: absolute;
    top: 84px;
    left: 50%;
    margin-left: -500px;
    width: 850px;
    padding-left: 75px;
    padding-right: 75px;
    height: 40px;
    font-size: 12px;
    background: #c0c0c0;
    z-index: 90;
}

.shengfen span {
    display: inline-block;
    color: #ffffff;
    margin-top: 9px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
}

.shengfen span:hover {
    background: #fbd437;
}

.shengfen-hover {
    background: #fbd437;
}

</style>
