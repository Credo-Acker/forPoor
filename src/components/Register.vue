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
                欢迎注册！请完善下你的信息，方便您以后的登录
            </div>
            <div class="part-register">
                <div class="left">
                    <img src="../assets/xiugai.png" class="nowImg">
                    <input type="file" accept="image/jpeg,image/jpg,image/png" class="uploadImg" v-on:change="changePreviewImage()">
                    <div class="tip-img">
                        点击选择上传头像
                    </div>
                </div>
                <div class="right">
                    <div class="nickname">
                        <div class="right-title">
                            昵称
                        </div>
                        <div class="right-input">
                            <input type="text" id="nickname" placeholder="输入文字" v-model="nickname">
                        </div>
                    </div>
                    <div class="password">
                        <div class="right-title">
                            密码
                        </div>
                        <div class="right-input">
                            <input type="password" id="password" placeholder="设定登录密码" v-model="password">
                        </div>
                    </div>
                    <div class="comfirm-password">
                        <div class="right-title">
                            确认密码
                        </div>
                        <div class="right-input">
                            <input type="password" id="comfirm-password" placeholder="重复登录密码" v-model="password2">
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
            <!-- <button id="submit" @click="submit"> -->
            <button id="submit" @click="register()">
                点击提交
            </button>
            <div class="question">
                <router-link to="/index" class="toindex">返回首页</router-link>
                /
                <router-link to="/index" class="toindex">遇到问题</router-link>
            </div>
        </div>
        <div class="main2" :class="{mainNone: !mainNone}">
            <img class="pingguo" :src="src">

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
import qs from 'qs';
export default {
    name: 'Register',
    data () {
        return {
            xialaNone: true,
            shenfen: "确认选择",
            mainNone: false,
            nickname: "",
            password: "",
            password2: "",
            src: "",
            imgName: "",
            url: "http://gm.credog.top/app"
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
            this.xialaNone = !this.xialaNone;
        },
        choose: function(num) {
            if (num == 1) {
                this.shenfen = "产品供应者";
            } else if (num == 2) {
                this.shenfen = "产品收购者";
            }
            this.xialaNone = !this.xialaNone;
        },
        submit: function() {
            let nickname_regex = /^[\u4E00-\u9FA5a-zA-Z]+$/;
            let password_regex = /^[a-zA-Z0-9]{6,16}$/;

            if (nickname_regex.test(this.nickname)) {
                if (password_regex.test(this.password)) {
                    if (this.password === this.password2) {
                        if (this.shenfen != "确认选择") {
                            this.register();
                            //this.mainNone = true;
                        } else {
                            alert("还未选择身份。");
                        }
                    } else {
                        alert("两次密码输入不一致");
                    }
                } else {
                    if (this.password.length >= 6 && this.password <=16) {
                        alert("密码只能是大小写字母和数字");
                    } else {
                        alert("密码长度需在6-16字符之间。");
                    }
                }
            } else {
                if (this.nickname.length < 6 && this.nickname.length > 20) {
                    alert("昵称必须6-20个字符(只能含中英文)");
                }
            }
            this.register();
        },
        changePreviewImage: function () {
            this.previewImage(event.target, '.nowImg');
        },
        previewImage: function (file, prvid) {
            // file：file控件
            // prvid: 图片预览容器
            let tip = "不是图片"; // 设定提示信息
            let filters = {
                "jpeg" : "/9j/4",
                "gif" : "R0lGOD",
                "png" : "iVBORw"
            };
            let prvbox = document.querySelector(prvid);
            prvbox.innerHTML = "";
            if (window.FileReader) { // html5方案
                // for (let i = 0, f; f = file.files[i]; i++) {
                let f = file.files[0];
                let fr = new FileReader();
                fr.onload = (e) => {
                    let src = e.target.result;
                    if (!validateImg(src)) {
                        alert(tip);
                    } else if (file.files[0].size / 1024 >= 150) {
                        alert("图片超过150k，请重新选择");
                    } else {
                        prvbox.src = src;
                        this.save(src, file.files[0].name);
                    }
                }
                fr.readAsDataURL(f);
                // }
            } else { // 降级处理
                if ( !/\.jpg$|\.png$|\.gif$/i.test(file.value) ) {
                    alert(tip);
                } else {
                    prvbox.src = file.value;
                }
            }
            function validateImg(data) {
                let pos = data.indexOf(",") + 1;
                for (let e in filters) {
                    if (data.indexOf(filters[e]) === pos) {
                        return e;
                    }
                }
                return null;
            }
        },
        save: function (src, name) {
            this.src = src;
            this.imgName = name;
        },
        register: function () {
            let params = {
                username: this.nickname,
                password: this.password,
                headImg: this.imgName,
                src: this.src,
                card: this.shenfen
            };
            this.$http.post(this.url + "/forPoor/register", params)
                .then((response) => {
                    if (response.data.status == "ok") {
                        this.mainNone = true;
                    } else if (response.data.status == "had") {
                        alert("昵称已存在");
                    }
                });
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
    background: url(../assets/reallogo.png);
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
    background: -ms-linear-gradient(top, #f3f3f3, #ffffff);        /* IE 10 */
    background: -moz-linear-gradient(top, #f3f3f3, #ffffff);/*火狐*/
    background: -webkit-linear-gradient(top, #f3f3f3, #ffffff);   /*Safari5.1 Chrome 10+*/
    background-size: 100% 100px;
    background-repeat: no-repeat;
    padding-bottom: 20px;
}

.main2 {
    position: relative;
    background: -ms-linear-gradient(top, #f3f3f3, #ffffff);        /* IE 10 */
    background: -moz-linear-gradient(top, #f3f3f3, #ffffff);/*火狐*/
    background: -webkit-linear-gradient(top, #f3f3f3, #ffffff);   /*Safari5.1 Chrome 10+*/
    background-size: 100% 100px;
    background-repeat: no-repeat;
    padding-bottom: 20px;
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
    margin-top: 50px;
}

.left {
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 323px;
    height: 357px;
}

.uploadImg {
    position: absolute;
    top: 0;
    width: 323px;
    height: 327px;
    border-radius: 323px;
    cursor: pointer;
    opacity: 0;
}

.nowImg {
    width: 323px;
    height: 327px;
    border-radius: 329px;
}

.right {
    position: relative;
    margin-left: 160px;
    display: inline-block;
}

.tip-img {
    line-height: 20px;
    height: 20px;
    font-size: 18px;
    color: #999999;
    text-align: center;
    margin-top: 20px;
}

.nickname,.password,.comfirm-password,.shenfen {
    position: relative;
    margin-bottom: 30px;
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
    margin-top: 60px;
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
    display: block;
    top: 80px;
    width: 323px;
    height: 327px;
    margin: 0 auto;
    border-radius: 323px;
}

.congratulation {
    margin-top: 150px;
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
    margin-top: 100px;
}

</style>
