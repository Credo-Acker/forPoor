<template>
    <div class="footerIndex">
        <div class="footerIndex-wrap">
            <div class="footer-left">
                <div class="title">
                    友情链接
                </div>
                <ul>
                    <li>中国财经网</li>
                    <li>农产品交易网</li>
                    <li>农村创业商机网</li>
                    <li>国家农村信息化服务网</li>
                </ul>
            </div>
            <div class="footer-center">
                <div class="title">
                    联系我们
                </div>
                <ul>
                    <li>电话: 15152555551</li>
                    <li>邮箱: 15151515147@qq.com</li>
                    <li>地址: 重庆市南岸区重庆邮电大学</li>
                    <li>网上留言</li>
                    <li>微信公众号: 志愿服务</li>
                </ul>
            </div>
            <div class="footer-right">
                <div class="title">
                    更新及分享
                </div>
                <span>更新时间: 每周一07：00<br>分享</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterIndex',
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
.footerIndex {
    position: relative;
    height: 130px;
    padding-top: 45px;
    width: 100%;
    background-color: #0f284d;
    color: #666666;
}

.footerIndex-wrap {
    position: relative;
    max-width: 1010px;
    height: 90px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.footer-left {
    position: relative;
    display: inline-block;
    width: 230px;
    font-size: 12px;
    vertical-align: top;
}

.footer-left li {
    float: left;
    margin-bottom: 3px;
}

.footer-left li:nth-child(1) {
    margin-right: 45px;
}

.footer-left li:nth-child(3) {
    margin-right: 21px;;
}

.footer-center {
    position: relative;
    display: inline-block;
    width: 290px;
    font-size: 12px;
    vertical-align: top;
}

.footer-center li {
    float: left;
    margin-bottom: 3px;
}

.footer-center li:nth-child(1) {
    margin-right: 18px;
}

.footer-center li:nth-child(3) {
    margin-right: 22px;
}

.footer-right {
    position: relative;
    display: inline-block;
    width: 135px;
    font-size: 12px;
    vertical-align: top;
}

.footer-right li {
    float: left;
    margin-bottom: 3px;
}

.title {
    font-size: 18px;
    margin-bottom: 5px;
}


</style>
