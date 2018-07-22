<template>
    <div class="register">
        <div class="header">
            <div class="logo">

            </div>
            <div class="title">

            </div>
        </div>
        <div class="main" :class="{mainNone: mainNone}">
            <div class="welcome">
                欢迎你！请完善下你的信息，方便您以后的登录<br>以后可直接扫码登录。
            </div>
            <div class="part-register">
                <div class="left">

                </div>
                <div class="right">
                    <div class="nickname">
                        <div class="right-title">
                            昵称
                        </div>
                        <div class="right-input">
                            <input type="text" id="nickname" placeholder="输入文字">
                        </div>
                    </div>
                    <div class="password">
                        <div class="right-title">
                            密码
                        </div>
                        <div class="right-input">
                            <input type="password" id="password" placeholder="设定登录密码">
                        </div>
                    </div>
                    <div class="comfirm-password">
                        <div class="right-title">
                            确认密码
                        </div>
                        <div class="right-input">
                            <input type="password" id="comfirm-password" placeholder="重复登录密码">
                        </div>
                    </div>
                    <div class="shenfen">
                        <div class="right-title">
                            注册身份
                        </div>
                        <div class="right-input">
                            <button id="shenfen">{{shenfen}}</button>
                            <span class="xiala" @click="openItem"></span>
                            <ul class="ul-xiala" :class="{ulxialanone: xialaNone}">
                                <li @click="choose(1)">产品供应者</li>
                                <li @click="choose(2)">产品收购者</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit">
                点击提交
            </button>
            <div class="question">
                <router-link to="/index" class="toindex">返回首页</router-link>
                /
                <router-link to="/index" class="toindex">遇到问题</router-link>
            </div>
        </div>
        <div class="main2" :class="{mainNone: !mainNone}">
            <div class="pingguo">

            </div>
            <div class="congratulation">
                恭喜你！注册成功！
            </div>
            <div class="fanhui">
                返回主页直接扫码登录
            </div>
            <router-link to="index" class="shouye">返回首页</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            xialaNone: true,
            shenfen: "确认选择",
            mainNone: false
        }
    },
    created() {

    },
    mounted() {

    },
    beforeDestroy() {

    },
    methods: {
        openItem: function() {
            // let register = document.querySelector('.register');
            this.xialaNone = !this.xialaNone;
            // register.addEventListener('click', function () {
            //     this.xialaNone = true;
            // });
        },
        choose: function(num) {
            if (num == 1) {
                this.shenfen = "产品供应者";
            } else if (num == 2) {
                this.shenfen = "产品收购者";
            }
            this.xialaNone = !this.xialaNone;
        }
    }
}
</script>

<style scoped>
.register {
    position: relative;
    height: 100%;
}

.header {
    margin: 0 auto;
    position: relative;
    height: 230px;
    width: 765px;
}

.logo {
    display: inline-block;
    position: relative;
    margin-top: 40px;
    width: 155px;
    height: 155px;
    background: url(../assets/logo.png);
    background-size: 100% 100%;
}

.title {
    display: inline-block;
    position: relative;
    margin-bottom: 30px;
    margin-left: 20px;
    width: 577px;
    height: 102px;
    background: url(../assets/title.png);
    background-size: 100% 100%;
}

.main {
    position: relative;
    /* background: linear-gradient(top, #f3f3f3, #ffffff); */
    background: -ms-linear-gradient(top, #f3f3f3, #ffffff);        /* IE 10 */
    background: -moz-linear-gradient(top, #f3f3f3, #ffffff);/*火狐*/
    background: -webkit-linear-gradient(top, #f3f3f3, #ffffff);   /*Safari5.1 Chrome 10+*/
    background-size: 100% 100px;
    background-repeat: no-repeat;
    padding-bottom: 20px;
}

.main2 {
    position: relative;
    background: linear-gradient(top, #f3f3f3, #ffffff) no-repeat;
    background-size: 100% 100px;
    padding-bottom: 20px;
    padding-top: 100px;
}

.welcome {
    position: relative;
    padding-top: 135px;
    height: 128px;
    width: 100%;
    font-size: 48px;
    color: #666666;
    text-align: center;
}

.part-register {
    position: relative;
    max-width: 1010px;
    margin: 0 auto;
    margin-top: 150px;
}

.left {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 323px;
    height: 327px;
    background: url(../assets/pingguo.png) 100% 100%;
}

.right {
    position: relative;
    margin-left: 160px;
    display: inline-block;
}

.nickname,.password,.comfirm-password,.shenfen {
    position: relative;
    margin-bottom: 70px;
}

.right-title {
    font-size: 30px;
    color: #666666;
    margin-bottom: 8px;
}

.right-input input {
    width: 495px;
    height: 27px;
    padding: 24px 10px;
    font-size: 24px;
    color: #999999;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
}

#shenfen {
    width: 515px;
    height: 75px;
    font-size: 24px;
    padding-left: 10px;
    text-align: left;
    color: #999999;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
}

.xiala {
    position: absolute;
    right: 10px;
    top: 70px;
    width: 30px;
    height: 30px;
    background: url(../assets/xiala.png) 100% 100%;
    cursor: pointer;
}

.ul-xiala {
    position: absolute;
    right: 2px;
    top: 110px;
    z-index: 2;
    width: 305px;
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 5px;
}

.ulxialanone {
    display: none;
}

.ul-xiala li {
    height: 45px;
    line-height: 45px;
    padding-left: 25px;
    font-size: 18px;
    color: #666666;
    cursor: pointer;
}

.ul-xiala li:nth-child(1) {
    border-bottom: 1px solid #e8e8e8;
}

.ul-xiala li:hover {
    background: #fbd437;
    color: #ffffff;
}

#submit {
    position: relative;
    display: block;
    margin: 0 auto;
    margin-top: 100px;
    width: 780px;
    height: 75px;
    line-height: 75px;
    font-size: 36px;
    color: #ffffff;
    background: #0429b3;
    border: none;
    cursor: pointer;
}

.question {
    position: relative;
    max-width: 1010px;
    text-align: right;
    margin: 0 auto;
    margin-top: 100px;
    color: #999999;
}

.toindex {
    position: relative;
    display: inline-block;
    color: #999999;
}

.mainNone {
    display: none;
}

.pingguo {
    position: relative;
    width: 323px;
    height: 327px;
    margin: 0 auto;
    background: url(../assets/pingguo.png) 100% 100%;
}

.congratulation {
    margin-top: 50px;
    text-align: center;
    font-size: 72px;
    color: #0429b3;
}

.fanhui {
    margin-top: 20px;
    text-align: center;
    font-size: 36px;
    color: #666666;
}

.shouye {
    display: block;
    text-align: center;
    line-height: 125px;
    font-size: 36px;
    color: #ffffff;
    background: #fbd437;
    width: 545px;
    height: 125px;
    margin: 0 auto;
    margin-top: 50px;
}

</style>
